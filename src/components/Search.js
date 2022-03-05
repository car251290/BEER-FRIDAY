import React, { useState, useEffect,useCallback } from "react";
import { ResultCard } from "../ResultCard/ResultCard";
import "../lib/font-awesome/css/style.css";
import SearchBar from "material-ui-search-bar";
import InfiniteScroll from "react-infinite-scroll-component";
const Search = () => {
  //use of the state
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
//useEffect fetch the data
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=60`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults((b) => [...b, ...data]);
        } else {
          setResults([]);
        }
      });
  }, [page]);
const onChange = useCallback((e) => {
    e.preventDefault();

    setQuery(e.target.value);
  },[]);
// for get the beer data of the search
  const handleClick = () => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data);
        } else {
          setResults([]);
        }
      });
  };
// for geeting to the favorite page of the beer
  const next = () => {
    setPage((page) => page + 1);
  };
  return (
    <div>
      <div className="input-wrapper">
         <SearchBar
          type="text"
           value={query}
           onChange={ () => console.log(onChange)}
           style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
          />
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-success"
          > 
            <span id="btn-success" className="btn4">
              Search for a beer 
            </span>
          </button>

        </div>
      </div>
      <InfiniteScroll dataLength={results.length} next={next} hasMore={true}>
        {results ? (
          results.length > 0 ? (
            <ul className="results1">
              {results.map((beer) => (
                <li key={beer.id}>
                  <ResultCard beer={beer} />
                </li>
              ))}
            </ul>
          ) : (
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          )
        ) : (
          <h2 style={{ textAlign: "center" }}>Result Not Found</h2>
        )}
      </InfiniteScroll>
    </div>
  );
};
export default Search;
