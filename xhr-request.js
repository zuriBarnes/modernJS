let xhr_1 = new XMLHttpRequest()
xhr_1.addEventListener('readystatechange', () => {
    if(xhr_1.readyState === 4) {
    console.log(xhr_1, xhr_1.responseText)
} 
})
xhr_1.open('GET', 'https://api.chucknorris.io/jokes/random')
xhr_1.send()
