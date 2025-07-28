import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  return (
    <section>
      {movies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </section>
  );
}

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <MoviesList />
      </main>
    </>
  );
};

export default Home;
