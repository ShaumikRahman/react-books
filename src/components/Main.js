import { useState, useEffect, useRef } from "react";
import Search from "./Search";
import Book from "./Book";

const Main = ({ type }) => {
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [error, setError] = useState(false);

  const books = useRef();

  useEffect(() => {
    if (data.length || searching) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [data, searching]);

  useEffect(() => {
    setEmpty(false);
    setSearching(false);
  }, [error]);

  useEffect(() => {
    if (searching) {
      books.current.classList.add('skeleton');
    } else {
      books.current.classList.remove('skeleton');
    }
  }, [searching]);

  return (
    <div className="main">
      <Search
        setData={setData}
        setSearching={setSearching}
        setError={setError}
        type={type}
      />
      {searching && (
        <div className="searching">
          <p className="searching__text">Searching...</p>
        </div>
      )}
      <div className="main__books" ref={books}>
        {error && (
          <div className="error">
            <p className="error__text">Error... Try again later</p>
          </div>
        )}
        {data &&
          data.map((item) => {
            return <Book key={item.key} item={item} />;
          })}
        {empty && (
          <div className="empty">
            <p className="empty__text">No results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
