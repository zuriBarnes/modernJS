const getData = (callback) => {
  const request = new XMLHttpRequest() // create new XMLHttp Object
  request.addEventListener('readystatechange', () => { // add event listener for State change
    if(request.readyState === 4 && request.status === 200) { // condition created to print only completed data fetch
      const data = JSON.parse(request.responseText);
      callback(undefined, data); // callthe callback function, and add arguements
} else if(request.readyState === 4) { // if not 200 status, print msg and error code
    callback('Could not fetch data', undefined);
    }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/') // main function that talks to API's
request.send() // send request
  
}
console.log(1) // check if callback works
console.log(2)

getData((err, data) => {
  console.log('callback fired')
  if(err) {
    console.log(err);
  } else {
    console.log(data)
  }
})
console.log(3)
console.log(4)
