
let inputData = +prompt ("Введите число", "");

let arr = [48.5, 32, 27, 755, 414, 47, 78, 77];

let Date;

let data2 = [];
   
    for (let i = 0; i < arr.length; i++) {
        let bruteForce = Math.floor(arr[i]);

        
            
            Date = bruteForce / 10;   
            
            data2[i] = Math.floor(Date);
            
           console.log(data2);       
    }

function perebor (){
  for (let i=0; i<data2.length;i++){

        if (data2[i]>=10){
           data2[i] = data2[i]/10;
           data2[i] = Math.floor(data2[i]);
        }
        if(data2[i]>=10){
            perebor();
        }

  }
}
perebor();



for (let i = 0; i<data2.length; i++){

        if(data2[i]==inputData){
            console.log(arr[i]);

        }else{
            alert('Нет такого числа');
            break;
        }


}

