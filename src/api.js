import axios from "axios";

const apiURL = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';

export const getQuotes = async () => {
  const quotesData = await axios.get(apiURL);
  return quotesData;
}