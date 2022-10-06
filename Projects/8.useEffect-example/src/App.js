import "./App.css";
import "./Resources/style.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({
    text: "",
    author: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://type.fit/api/quotes";

        const response = await fetch(apiUrl);
        const listOfQuotes = await response.json();
        setQuotes(listOfQuotes);
        const quote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
        if(!quote.author){
          quote.author = "Unknown"
        }
        setCurrentQuote({
          text: quote.text,
          author: quote.author
        })  

        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const showNewQuote = () => {
    setLoading(true)
      const quote = quotes[Math.floor(Math.random() * quotes.length)];

      if(!quote.author){
        quote.author = "Unknown"
      }
      setCurrentQuote({
        text: quote.text,
        author: quote.author
      })
      setLoading(false)
  };

  if (loading || currentQuote.text==="") {
    return <div className="loader" id="loader"></div>;
  }

  return (
    <div className="quote-container" id="quote-container">
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>
        <span id="quote">{currentQuote.text}</span>
      </div>
      <div className="quote-author">
        <span id="author">{currentQuote.author}</span>
      </div>
      <div className="button-container">
        <button id="new-quote" onClick={showNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
