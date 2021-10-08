import { useState } from "react";
import Search from "./Search";
import Book from "./Book";

const BookMode = () => {
    const [data, setData] = useState([]);
    const [searching, setSearching] = useState(false);

    function handleData(bookData) {
        setData(bookData);
      }

    return (
      <div className="main">
        <Search handleData={handleData} setSearching={setSearching} />
        <div className="main__books">
          {
            searching && <div className="searching">
              <p className="searching__text">Searching...</p>
            </div>
          }
          {data &&
            data.map((item) => {
              return <Book key={item.key} item={item} />;
            })}
        </div>
      </div>
    )
}

export default BookMode