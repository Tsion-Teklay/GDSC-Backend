async function fetchTodo(){
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let result = await data.json();
        console.log(result);
    }
    catch(error){
        console.log('error:', error)
    } 
}

fetchTodo();