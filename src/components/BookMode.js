import { useState } from "react";
import Search from "./Search";
import Book from "./Book";

const BookMode = () => {
    const [data, setData] = useState([]);

    function handleData(bookData) {
        setData(bookData);
      }

    return (
      <div className="BookMain">
        <Search handleData={handleData} />
        <div className="BookMain__books">
          {data.length &&
            data.map((item) => {
              return <Book key={item.key} item={item} />;
            })}
        </div>
      </div>
    )
}

export default BookMode