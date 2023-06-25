function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteResult = document.getElementById('quote-result');
            quoteResult.textContent = data.content;
        })
        .catch(error => console.log(error));
}
