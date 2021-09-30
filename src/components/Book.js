import nocovM from "../img/no-cover-M.jpg";

const Book = ({item}) => {
  return (
    <div className="book">
      <h1 className="book__title">{item.title}</h1>
      {item.cover_i ? (
        <img
          src={`http://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
          alt={item.title}
          className="book__cover"
        />
      ) : (
        <img src={nocovM} alt={item.title} className="book__noCover" />
      )}
      <div className="book__author">
          Author - {item.author_name && item.author_name[0]}
      </div>
      <div className="book__publisher">
          Publisher - {item.publisher && item.publisher}
      </div>
      <div className="book__year">
          Published {item.first_publish_year && item.first_publish_year}
      </div>
      <div className="book__genre">
          Genre - {item.subject && item.subject}
      </div>
      <div className="book__isbn">
          ISBN - {item.isbn && item.isbn.map((code, index) => {
              return <p className="isbn" key={index}>{code}</p>
          })}
      </div>
    </div>
  );
};

export default Book;
