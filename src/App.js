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
    <div >
      {error && <div>{error.message}</div>}
      <p>{currentQuote.quote}</p>
      <p>{currentQuote.author}</p>
      <button disabled={isDisabled} onClick={getPreviousQuote}>Previous</button>
      <button onClick={getRandomQuote}>Random quote</button>
    </div>
  );
}
export default App;
