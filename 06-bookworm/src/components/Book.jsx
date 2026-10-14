import { coverUrl } from "../helpers/url-helpers";

function Book({ book, onSelectBook }) {
  const { title, first_publish_year, cover_i, key } = book;
  return (
    <li onClick={() => onSelectBook(key)}>
      <img src={coverUrl(cover_i)} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{first_publish_year}</span>
        </p>
      </div>
    </li>
  );
}

export default Book;
