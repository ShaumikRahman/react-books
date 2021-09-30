import { useState } from "react";
import Search from "./components/Search";
import Book from "./components/Book";

function App() {
  const [data, setData] = useState([]);

  function handleData(bookData) {
    setData(bookData);
  }

  return (
    <div className="App">
      <h1>Books</h1>
      <div className="main">
        <Search handleData={handleData} />
        <div className="main__books">
          {data.length &&
            data.map((item) => {
              return <Book key={item.key} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
