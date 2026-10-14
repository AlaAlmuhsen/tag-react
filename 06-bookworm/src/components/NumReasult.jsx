function NumReasult({ books }) {
  return (
    <p className="num-results">
      <strong>{books.length}</strong> Found Book
    </p>
  );
}

export default NumReasult;
