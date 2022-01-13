fetch('https://jsonplaceholder.typicode.com/todos/1',{
    metod:'POST',
    body: JSON.stringify(),
    headers:{
        'Content-type':'application/json'
    }
})
  .then(response => response.json())
  .then(json => console.log(json));


  obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
  };

  const newArr = Object.entries(obj).filter(item => item[1] === 'person').map(item => item[0]);
  

  console.log(newArr);