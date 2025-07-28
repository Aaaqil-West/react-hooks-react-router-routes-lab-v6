import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function DirectorsList() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then(setDirectors);
  }, []);

  return (
    <section>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function Directors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <DirectorsList />
      </main>
    </>
  );
};

export default Directors;
