const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0).toFixed(1);

function ShelfSummary({ shelf }) {
  const avgCommunitRating = average(shelf.map((book) => book.communityRating));
  const avgUserRating = average(shelf.map((book) => book.userRating));
  const avgPages = average(shelf.map((book) => book.pages));
  return (
    <div className="summary">
      <h2>Books on your shelf</h2>
      <div>
        <p>
          <span>📚</span>
          <span>{shelf.length} books</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgCommunitRating}</span>
        </p>
        <p>
          <span>💛</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>📄</span>
          <span>{avgPages} pages</span>
        </p>
      </div>
    </div>
  );
}
export default ShelfSummary;
