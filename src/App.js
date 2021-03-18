import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 6000);
    getMovices();
  }, []);

  const getMovices = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(movies);
    setIsLoading(false);
  };

  return (
    <section class='container'>
      {isLoading ? (
        <div class='loder'>
          <span className='loader_text'>"Loading..." </span>
        </div>
      ) : (
        <div className='movies'>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.mdium_cover_image}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;
