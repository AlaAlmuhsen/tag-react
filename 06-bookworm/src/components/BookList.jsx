import Book from "./Book";

function BookList({ books, onSelectBook }) {
  return (
    <ul className="list">
      {books?.map((book) => (
        <Book book={book} onSelectBook={onSelectBook} key={book.key} />
      ))}
    </ul>
  );
}

export default BookList;
