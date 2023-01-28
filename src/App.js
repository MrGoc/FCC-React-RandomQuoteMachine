import React from "react";
import logo from "./logo.svg";
/*import { Counter } from "./features/counter/Counter";*/
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuoteAsync, selectQuote } from "./features/quote/quoteSlice";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const dataFetchedRef = useRef(false);

  //const quote = useSelector((state) => state.quote);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    dispatch(getRandomQuoteAsync());
  }, []);

  //if (quote.status == "loading") return <p>Loading...</p>;
  return (
    <div id="quote-box">
      <QuoteBox />
      <Buttons />
      <Footer />
    </div>
  );
}

function QuoteBox() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);

  /*
  useEffect(() => {
    dispatch(getRandomQuoteAsync());
  }, []);
*/
  //if (quote.status == "loading") return <p>Loading...</p>;
  return (
    <div>
      <p id="text" className="text-center fst-italic fs-3">
        <i className="bi bi-quote"></i>
        {quote.quote.content}
      </p>
      <p id="author" className="text-end">
        - {quote.quote.author}
      </p>
    </div>
  );
}

function Buttons() {
  const dispatch = useDispatch();

  return (
    <div
      id="buttons"
      className="d-flex align-items-center justify-content-center text-center"
    >
      <div className="col">
        <a
          id="tweet-quote"
          className="btn btn-primary"
          href="twitter.com/intent/tweet"
        >
          <i className="bi bi-twitter"></i> Tweet
        </a>
      </div>
      <div className="col"></div>
      <div className="col">
        <button
          id="new-quote"
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(getRandomQuoteAsync())}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="quote-footer">
      <p id="text-footer" className="text-center fs-6 fst-italic">
        by GS
      </p>
    </div>
  );
}

export default App;
