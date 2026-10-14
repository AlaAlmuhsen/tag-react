import ShelfBook from "./ShelfBook";

function ShelfList({ shelf, onDeleteFromShelf }) {
  return (
    <ul className="list">
      {shelf.map((book) => (
        <ShelfBook book={book} key={book.key} onDeleteFromShelf={onDeleteFromShelf} />
      ))}
    </ul>
  );
}

export default ShelfList;
