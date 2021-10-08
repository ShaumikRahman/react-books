import { useState, useEffect } from "react";
import Search from "./Search";
import Book from "./Book";

const Main = ({type}) => {
    const [data, setData] = useState([]);
    const [searching, setSearching] = useState(false);
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
      if (data.length || searching) {
        setEmpty(false);
      } else {
        setEmpty(true);
      }

    }, [data, searching]);

    return (
      <div className="main">
        <Search setData={setData} setSearching={setSearching} type={type}/>
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
            {
              empty && <div className="empty">
                <p className="empty__text">No results</p>
              </div>
            }
        </div>
      </div>
    )
}

export default Main