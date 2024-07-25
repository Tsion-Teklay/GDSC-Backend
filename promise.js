function fetchTodo() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => {
          console.log(result);
          resolve(result);
        })
        .catch(error => {
          console.log('error:', error);
          reject(error);
        });
    });
  }
  
  fetchTodo();