function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const quoteResult = document.getElementById('quote-result');
            const authorResult = document.getElementById('author-result');
            quoteResult.textContent = data.content;
            authorResult.textContent = data.author
        })
        .catch(error => console.log(error));
}
