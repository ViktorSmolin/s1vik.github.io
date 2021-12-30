console.log(this);

function abc (){
    console.log(this);
    console.log(3+5/2);
}

abc();

document.querySelector('p').onclick = abc;

function red(){
    this.style.background = 'red';
};

document.querySelector('.div').onclick = red;