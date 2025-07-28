import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function ActorsList() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then(setActors);
  }, []);

  return (
    <section>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function Actors() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <ActorsList />
      </main>
    </>
  );
};

export default Actors;
