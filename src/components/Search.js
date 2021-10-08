import { useRef, useState, useEffect } from "react";

const Search = ({ handleData, setSearching }) => {
  const [query, setQuery] = useState('');
  const form = useRef();
  const search = useRef();

  useEffect(() => {
    let q = query;
    q = q.replace(/\s\s+/g, " ");
    q = escape(q);

    if (q.length) {
      setSearching(true);
      fetch(`http://openlibrary.org/search.json?q=${q}&limit=10`)
        .then((res) => res.json())
        .then((info) => {
          console.clear();
          console.log(info);
          setSearching(false);
          handleData(info.docs);
        });
    } else {
      form.current.reset();
      search.current.classList.add("invalid");
    }
  }, [query]);

  const toggleRed = () => {
    search.current.classList.remove("invalid");
  };

  return (
    <div className="search">
      <form ref={form} className="searchForm" onSubmit={(e) => {e.preventDefault(); setQuery(e.target.search.value);}}>
        <input
          ref={search}
          type="search"
          name="search"
          id="search"
          onChange={toggleRed}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default Search;
