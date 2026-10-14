import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NumReasult from "./components/NumReasult";
import Search from "./components/Search";
import Box from "./components/Box";
import Main from "./components/Main";
import BookList from "./components/BookList";
import ShelfSummary from "./components/ShelfSummary";
import ShelfList from "./components/ShelfList";
import BookDetails from "./components/BookDetails";
import Loader from "./components/Loader";
import { useBooks } from "./hooks/useBooks";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [shelf, setShelf] = useLocalStorage("shelf", []);
  const [query, setQuery] = useState("harry");
  const [selectedId, setSelectedId] = useState(null);
  const { books, isLoading, error } = useBooks(query);

  function handleSelectedBook(id) {
    setSelectedId(id);
  }
  function handleCloseBook() {
    setSelectedId(null);
  }
  function handleAddToShelf(book) {
    setShelf((shelf) => [...shelf, book]);
  }
  function handleDeleteFromShelf(id) {
    setShelf((shelf) => shelf.filter((book) => book.key !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumReasult books={books} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!error && !isLoading && (
            <BookList books={books} onSelectBook={handleSelectedBook} />
          )}
          {error && !isLoading && <h1>{error}</h1>}
        </Box>
        <Box>
          {selectedId ? (
            <BookDetails
              selectedId={selectedId}
              shelf={shelf}
              onAddToShelf={handleAddToShelf}
              onCloseBook={handleCloseBook}
            />
          ) : (
            <>
              <ShelfSummary shelf={shelf} />
              <ShelfList
                shelf={shelf}
                onDeleteFromShelf={handleDeleteFromShelf}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
