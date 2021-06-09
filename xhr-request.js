let request = new XMLHttpRequest() // create new XMLHttp Object
request.addEventListener('readystatechange', () => { // add event listener for State change
    if(request.readyState === 4 && request.status === 200) { // condition created to print only completed data fetch
    console.log(request, request.responseText)
} else if(request.readyState === 4) { // if not 200 status, print msg and error code
    console.log('Could not fecth data', request.status)
    }
})
request.open('GET', 'https://api.chucknorris.io/jokes/random/') // main function that talks to API's
request.send() // send request

