let button = document.querySelector('.but'),
    sq = document.querySelectorAll('.sq'),
    w = 0;

    console.log(sq);

button.addEventListener('click', ()=>{
    
    console.log(w);
    
    let q = w;
    
    
    if(w<=3){

        sq[w].classList.add('s');
        }
    if(w>=1 && w<=4){
            sq[q-1].classList.remove('s');
        }
    if(w<=4){
            w++;
        }
    if(w==5){
        w=0;
    }
    
});



