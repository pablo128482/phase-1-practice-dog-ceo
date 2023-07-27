console.log('%c HI', 'color: firebrick')

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    // response added with data
  })
  .catch(error => {
    //the error is resolved
  });