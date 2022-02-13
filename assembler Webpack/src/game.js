let numTimesClicked = 0;

function win() {
    alert('You win!');
    reset();
}

function reset() {
    numTimesClicked = 0;
}

function click() {
    numTimesClicked++;
    console.log(`You've been clicked!`);
    if (numTimesClicked === 10) win();
}

// функция click () должна быть выше этой строчки
export default click;