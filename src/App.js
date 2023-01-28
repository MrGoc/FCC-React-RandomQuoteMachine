import React from "react";
import logo from "./logo.svg";
/*import { Counter } from "./features/counter/Counter";*/
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuoteAsync, selectQuote } from "./features/quote/quoteSlice";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  /*const quote = useSelector(selectQuote);*/
  const quote = useSelector((state) => state.quote);
  /*const { quote, loading } = useSelector((state) => state || {});*/

  useEffect(() => {
    dispatch(getRandomQuoteAsync());
  }, []);

  if (quote.status == "loading") return <p>Loading...</p>;
  return (
    <div id="quote-box">
      <div>
        <p id="text" className="text-center fst-italic fs-3">
          <i className="bi bi-quote"></i>
          {quote.quote.content}
        </p>
        <p id="author" className="text-end">
          - {quote.quote.author}
        </p>
      </div>
      <div
        id="buttons"
        className="d-flex align-items-center justify-content-center text-center"
      >
        <div className="col">
          <a id="tweet-quote" className="btn btn-primary">
            <i className="bi bi-twitter"></i>tvitaj
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
            dodaj
          </button>
        </div>
      </div>
      <div id="quote-footer">
        <p id="text" className="text-center fs-6 fst-italic">
          by GS
        </p>
      </div>
    </div>
  );
}

export default App;
