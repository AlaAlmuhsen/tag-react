import { useEffect, useState } from "react";
import { coverUrl } from "../helpers/url-helpers";
import StarRating from "./StarRating";
import Loader from "./Loader";
import useKey from "../hooks/useKey";

function BookDetails({ selectedId, shelf, onAddToShelf, onCloseBook }) {
  const [book, setBook] = useState({});
  const [userRating, setUserRating] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isOnShelf = shelf.map((book) => book.key).includes(selectedId);
  const shelfUserRating = shelf.find(
    (book) => book.key === selectedId,
  )?.userRating;

  const {
    title,
    first_publish_year: year,
    cover_i: coverId,
    number_of_pages_median: pages,
    ratings_average: communityRating,
    ratings_count: ratingsCount,
    first_sentence: firstSentence,
    author_name: authors,
    publisher: publishers,
    subject: subjects,
  } = book;

  useEffect(() => {
    setIsLoading(true);
    async function getBookDetails() {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=key:${selectedId}&limit=20&fields=title,first_publish_year,cover_i,number_of_pages_median,ratings_average,ratings_count,first_sentence,author_name,publisher,subject`,
      );

      const data = await res.json();
      setBook(data.docs[0]);
      setIsLoading(false);
    }

    getBookDetails();
  }, [selectedId]);

  useKey("Escape", onCloseBook);

  useEffect(() => {
    if (!title) {
      return;
    }

    document.title = `Book | ${title}`;

    return function () {
      document.title = "useBookWorm";
    };
  }, [title]);

  function handleAdd() {
    const newShelfBook = {
      key: selectedId,
      title,
      year,
      cover: coverUrl(coverId),
      pages: pages ?? 0,
      communityRating: Number((communityRating ?? 0).toFixed(1)),
      userRating,
    };

    onAddToShelf(newShelfBook);
    onCloseBook();
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseBook}>
              &larr;
            </button>
            <img src={coverUrl(coverId)} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>First published {year} &bull; pages</p>
              <p>{subjects?.slice(0, 3).join(", ")}</p>
              <p>
                <span>⭐️</span>
                {communityRating?.toFixed(1)} from {ratingsCount} readers
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isOnShelf ? (
                <>
                  <StarRating
                    maxRating={5}
                    size={32}
                    messages={["Meh", "Okay", "Good", "Great", "Loved it"]}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to shelf
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this book {shelfUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{firstSentence?.[0]}</em>
            </p>
            <p>Written by {authors?.join(", ")}</p>
            <p>Published by {publishers?.[0]}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default BookDetails;

// function BookDetails({ selectedId, onCloseBook, onAddToShelf, shelf }) {
//   const [book, setBook] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [userRating, setUserRating] = useState("");

//   const isOnShelf = shelf.map((book) => book.key).includes(selectedId);
//   const shelfUserRating = shelf.find(
//     (book) => book.key === selectedId
//   )?.userRating;

//   const {
//     title,
//     first_publish_year: year,
//     cover_i: coverId,
//     number_of_pages_median: pages,
//     ratings_average: communityRating,
//     ratings_count: ratingsCount,
//     first_sentence: firstSentence,
//     author_name: authors,
//     publisher: publishers,
//     subject: subjects,
//   } = book;

//   function handleAdd() {
//     const newShelfBook = {
//       key: selectedId,
//       title,
//       year,
//       cover: coverUrl(coverId),
//       communityRating: Number((communityRating ?? 0).toFixed(1)),
//       pages: pages ?? 0,
//       userRating,
//     };

//     onAddToShelf(newShelfBook);
//     onCloseBook();
//   }

//   useEffect(
//     function () {
//       function callback(e) {
//         if (e.code === "Escape") {
//           onCloseBook();
//         }
//       }

//       document.addEventListener("keydown", callback);

//       return function () {
//         document.removeEventListener("keydown", callback);
//       };
//     },
//     [onCloseBook]
//   );

//   useEffect(
//     function () {
//       async function getBookDetails() {
//         setIsLoading(true);
//         const res = await fetch(
//           `${API_URL}?q=key:${selectedId}&fields=${DETAILS_FIELDS}`
//         );
//         const data = await res.json();
//         setBook(data.docs[0]);
//         setIsLoading(false);
//       }
//       getBookDetails();
//     },
//     [selectedId]
//   );

//   useEffect(
//     function () {
//       if (!title) return;
//       document.title = `Book | ${title}`;

//       return function () {
//         document.title = "useBookworm";
//         // console.log(`Clean up effect for book ${title}`);
//       };
//     },
//     [title]
//   );

//   return (

//   );
// }
