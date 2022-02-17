var app = (function () {

    var config = {};

    var ui = {};

    // Привязка событий
    function _bindHandlers() {
        // ...
    }

    // Инициализация приложения
    function init() {
        // ...
        _bindHandlers();
    }

    // Возвращаем наружу
    return {
        init: init
    }
})();

// Запуск приложения
$(document).ready(app.init);

var ui = {
    $body: $('body'),
    $menu: $('#menu'),
    $pageTitle: $('#page-title'),
    $content: $('#content')
};

var config = {
    siteTitle: 'Webdevkin SPA',
    mainPage: 'main',
    pages: {
        main: {
            title: 'Главная',
            menu: 'main'
        },
        about: {
            title: 'О проекте',
            menu: 'about'
        },
        blog: {
            title: 'Блог Webdevkin-a',
            menu: 'blog'
        },
        simpple: {
            title: 'Проект Simpple',
            menu: 'simpple'
        },
        contacts: {
            title: 'Контакты',
            menu: 'contacts'
        },
        shop: {
            title: 'Интернет-магазины',
            menu: 'blog'
        },
        frontend: {
            title: 'Статьи о фронтенде',
            menu: 'blog'
        },
        mysql: {
            title: 'База данных Mysql',
            menu: 'blog'
        },
        widgets: {
            title: 'Встраиваемые javascipt-виджеты',
            menu: 'blog'
        }
    }
};

// Привязка событий
function _bindHandlers() {
    ui.$body.on('click', 'a[data-link="ajax"]', _navigate);
    window.onpopstate = _popState;
}

// Клик по ссылке
function _navigate(e) {
    e.stopPropagation();
    e.preventDefault();

    var page = $(e.target).attr('href');

    _loadPage(page);
    history.pushState({
        page: page
    }, '', page);
}

// Кнопки Назад/Вперед
function _popState(e) {
    var page = (e.state && e.state.page) || config.mainPage;
    _loadPage(page);
}

// Загрузка контента по странице
function _loadPage(page) {
    var url = 'pages/' + page + '.html',
        pageTitle = config.pages[page].title,
        menu = config.pages[page].menu;

    $.get(url, function (html) {
        document.title = pageTitle + ' | ' + config.siteTitle;
        ui.$menu.find('a').removeClass('active');
        ui.$menu.find('a[data-menu="' + menu + '"]').addClass('active');
        ui.$pageTitle.html(pageTitle);
        ui.$content.html(html);
    });
}

// Инициализация приложения
function init() {
    var page = document.location.pathname.substr(1) || config.mainPage;
    _loadPage(page);

    _bindHandlers();
}