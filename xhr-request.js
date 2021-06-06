// Request Data from API Endpoint
const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', () => {
// console.log(xhr, xhr.readyState)
    if(xhr.readyState === 4) {
    console.log(xhr.responseText)
    } else {
    console.log('error, loading incomplete')
}
})
xhr.open('GET', 'https://pokeapi.co/api/v2/')
xhr.send()
