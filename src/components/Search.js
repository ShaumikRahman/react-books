import { useRef, useState, useEffect } from "react";

const Search = ({ setData, setSearching, setError, type }) => {
  const [query, setQuery] = useState('');
  const form = useRef();
  const search = useRef();

  function handleSearching(bool) {
    setSearching(bool);
  }

  function handleData(data) {
    // let sortedData = data.sort((item1, item2) => {return item2.first_publish_year - item1.first_publish_year });
    // console.log(sortedData);
    // setData(sortedData);
    setData(data);
  }

  useEffect(() => {
    let q = query;
    q = q.replace(/\s\s+/g, " ");
    q = escape(q);

    if (q.length) {
      setError(false);
      handleSearching(true);
      fetch(`https://openlibrary.org/search.json?${type}=${q}&limit=100`)
        .then(res => res.json())
        .then(info => {
          console.clear();
          console.log(info);
          handleSearching(false);
          handleData(info.docs);
        })
        .catch(error => {
          handleSearching(false);
          handleData([]);
          setError(true);
        })
    } else {
      form.current.reset();
      search.current.classList.add("invalid");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const normalize = () => {
    search.current.classList.remove("invalid");
  };

  return (
    <div className="search">
      <form ref={form} className="searchForm" onSubmit={(e) => {e.preventDefault(); setQuery(e.target.search.value);}}>
        <input
          ref={search}
          className="searchForm__search"
          type="search"
          name="search"
          id="search"
          placeholder={`search by ${type}`}
          onChange={normalize}
        />
        <input type="submit" value="search" className="searchForm__submit" />
      </form>
    </div>
  );
};

export default Search;
