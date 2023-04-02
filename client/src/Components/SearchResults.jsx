import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext";

function SearchResults() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let { results, setResults } = useContext(SearchContext);

  return (
    <div className="container mb-2">
      <div className="row" id="searchResults">
        {loading ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div id="searchResults" className="row mt-2">
            {results.map((podcast) => (
              <div
                className="col-lg-4 col-md-6 col-12 ps-3 pe-3 mt-3 mb-4"
                id="podcast"
                key={podcast.id}
              >
                <Link to={`/episode/${podcast.id}`}>
                  <h5 className="text-center mb-3">{podcast.title_original}</h5>
                  <img
                    src={podcast.podcast.image}
                    className="rounded mx-auto d-block col-8"
                  />
                  <h6 className="text-center mt-3">
                    {podcast.podcast.title_original}
                  </h6>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
