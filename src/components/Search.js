import { useRef } from "react";

const Search = ({handleData}) => {
    const form = useRef();
    const search = useRef();
    
  function validate(e) {
    e.preventDefault();
    let q = e.target.search.value.trim();
    q = q.replace(/\s\s+/g, " ");
    q = escape(q);

    if (q.length) {
        fetch(`http://openlibrary.org/search.json?q=${q}&limit=10`)
      .then((res) => res.json())
      .then((info) => {
        console.clear();
        console.log(info);
        handleData(info.docs);
      })
    } else {
        form.current.reset();
        search.current.classList.add('invalid');
    }
  }

  const toggleRed = () => {
    search.current.classList.remove('invalid');
}

  return (
    <div className="main__search">
      <form ref={form} className="searchForm" onSubmit={(e) => validate(e)}>
        <input ref={search} type="search" name="search" id="search" onChange={toggleRed} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default Search;
