import { useState } from "react";
import nocovM from "../img/no-cover-M.jpg";

const Test = () => {
  const [data, setData] = useState([]);

  function search(e) {
    e.preventDefault();
    let q = e.target.search.value.trim();
    q = q.replace(/\s\s+/g, " ");
    q = escape(q);

    fetch(`http://openlibrary.org/search.json?q=${q}&limit=10`)
      .then((res) => res.json())
      .then((info) => {
        console.clear();
        console.log(info);
        setData(info.docs);
      });
  }

  return (
    <div className="test">
      <div className="search">
        <form className="searchForm" onSubmit={(e) => search(e)}>
          <input type="search" name="search" id="search" />
          <input type="submit" value="search" />
        </form>
      </div>
      <div className="result">
        {data.length &&
          data.map((item) => {
            return (
              <div key={item.key} className="book">
                <h1 className="book__title">{item.title}</h1>
                {item.cover_i ? (
                  <img
                    src={`http://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                    alt={item.title}
                  />
                ) : (
                  <img src={nocovM} alt={item.title} />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Test;
