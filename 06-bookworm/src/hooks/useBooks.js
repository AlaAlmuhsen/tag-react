import { useEffect, useState } from "react";

export function useBooks(query) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchBook() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${query}&limit=20&fields=key,title,first_publish_year,cover_i`,
          {
            method: "GET",
            signal: controller.signal,
          },
        );

        if (!res.ok) {
          throw new Error("SWR");
        }

        const data = await res.json();

        if (data.numFound === 0) {
          throw new Error("Book Not Found");
        }
        setBooks(data.docs);
        setError("");
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.trim().length < 3) {
      setBooks([]);
      return;
    }
    fetchBook();

    return function () {
      controller.abort();
    };
  }, [query]);

  return {
    books,
    isLoading,
    error,
  };
}
