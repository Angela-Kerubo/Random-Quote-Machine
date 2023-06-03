document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('#text p');
    const authorText = document.querySelector('#author p');
    const newQuoteButton = document.querySelector('#new-quote');
    const tweetButton = document.querySelector('#tweet-quote');
  
    newQuoteButton.addEventListener('click', fetchQuote);
  
    async function fetchQuote() {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.textContent = data.content;
        authorText.textContent = `- ${data.author}`;
        updateTweetButton(data.content, data.author);
      } catch (error) {
        console.log(error);
      }
    }
  
    function updateTweetButton(quote, author) {
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${quote} - ${author}`
      )}`;
      tweetButton.href = tweetUrl;
    }
  
    fetchQuote();
  });