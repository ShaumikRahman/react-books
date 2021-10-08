import { useState } from "react";
import Search from "./Search";
import Book from "./Book";

const Main = ({type}) => {
    const [data, setData] = useState([]);
    const [searching, setSearching] = useState(false);

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
        </div>
      </div>
    )
}

export default Main