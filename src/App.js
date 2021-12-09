import { useEffect, useState } from 'react';
import { getQuotes } from './api.js';
import './App.css';

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [previousQuotes, setPreviousQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState([]);
  const [isDisabled, setDisabled] = useState(true);

  function getRandomQuote() {
    if (allQuotes.length > 0) {
      let randomNumber = Math.floor(Math.random() * allQuotes.length);
      let quote = allQuotes[randomNumber];
      setCurrentQuote(quote);
      setPreviousQuotes([...previousQuotes, quote]);
      if (previousQuotes.length > 0) {
        setDisabled(false);
      }
    }
  }

  function getPreviousQuote() {
    let prevQuote = previousQuotes[previousQuotes.length - 2];
    setCurrentQuote(prevQuote);
    previousQuotes.splice(-1, 1);
    setPreviousQuotes(previousQuotes);
    if (previousQuotes.length < 2) {
      setDisabled(true);
    }
  }

  useEffect(() => {
    getQuotes()
      .then(response => setAllQuotes(response.data))
      .catch(error => setError(error))
  }, [])

  useEffect(() => { getRandomQuote() }, [allQuotes])

  return (
    <div className="app">
      {error && <div>{error.message}</div>}
      <p className="app__quote">{currentQuote.quote}</p>
      <p className="app__author">{currentQuote.author}</p>
      <div className="app__buttons">
        <button disabled={isDisabled} onClick={getPreviousQuote} className="app__button">Previous</button>
        <button onClick={getRandomQuote} className="app__button">Random quote</button>
      </div>
    </div>
  );
}
export default App;
