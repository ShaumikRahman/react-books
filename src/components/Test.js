import { useState } from "react";

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
          {data.length && (
              data.map(item => {
                  return (
                      <p key={item.key}>{item.title}</p>
                  )
              })
          )}
      </div>
    </div>
  );
};

export default Test;
