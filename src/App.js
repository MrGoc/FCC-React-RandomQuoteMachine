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
  const { quote, loading } = useSelector((state) => state.quote || {});

  useEffect(() => {
    dispatch(getRandomQuoteAsync);
  }, []);

  if (loading == "loading") return <p>Loading...</p>;
  return (
    <div id="quote-box" className="text-bg-secondary">
      <div>
        <p id="text" className="text-center fst-italic fs-3">
          <i className="bi bi-quote"></i>
          {quote.content}
        </p>
        <p id="author" className="text-end">
          autor
        </p>
      </div>
      <div
        id="buttons"
        className="d-flex align-items-center justify-content-center text-center text-bg-danger"
      >
        <div className="col">
          <a id="tweet-quote" className="btn btn-primary">
            <i className="bi bi-twitter"></i>tvitaj
          </a>
        </div>
        <div className="col"></div>
        <div className="col">
          <button id="new-quote" type="button" className="btn btn-primary">
            dodaj
          </button>
        </div>
      </div>
      <div id="quote-footer" className="text-bg-warning">
        <p id="text" className="text-center">
          To sam ja
        </p>
      </div>
    </div>
  );
}

export default App;
