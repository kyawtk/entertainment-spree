import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Chip } from "@mui/material";
const Genres = ({
  type = "movie",
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
  selectedGenres,
}) => {
  const { data } = useFetch(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  useEffect(() => {
    setGenres(data.genres);
  }, [data]);
  function handleAdd(genre) {
    setSelectedGenres((current) => [...current, genre]);
    setGenres((current) => current.filter((current) => current.id != genre.id));
    setPage(1);
  }
  function handleRemove(genre) {
    setSelectedGenres((current) => current.filter((g) => g.id != genre.id));
    setGenres((current) => [...current, genre]);
    setPage(1);
  }
  return (
    <div className="py-5">
      {selectedGenres &&
        selectedGenres.map((genre) => {
          return (
            <Chip
              color="success"
              key={genre.id}
              label={genre.name}
              onDelete={() => handleRemove(genre)}
            ></Chip>
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              color="primary"
              key={genre.id}
              label={genre.name}
              onClick={() => handleAdd(genre)}
            ></Chip>
          );
        })}
    </div>
  );
};

export default Genres;
