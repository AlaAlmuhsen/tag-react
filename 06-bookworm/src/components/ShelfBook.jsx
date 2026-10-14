function ShelfBook({ book, onDeleteFromShelf }) {
  const { key,cover, title, communityRating, userRating, pages } = book;
  return (
    <li>
      <img src={cover} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{communityRating}</span>
        </p>
        <p>
          <span>💛</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>📄</span>
          <span>{pages} pages</span>
        </p>

        <button className="btn-delete" onClick={() => onDeleteFromShelf(key)}>
          X
        </button>
      </div>
    </li>
  );
}

export default ShelfBook;
