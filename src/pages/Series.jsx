import {  useState } from "react";
import useFetch from "../hooks/useFetch";
import CustomPagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
import Genres from "../components/Genres";
import { useGenres } from "../hooks/useGenres";
const Series = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const genreIds = useGenres(selectedGenres);
  
  const { data } = useFetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=${page}&sort_by=popularity.desc&with_genres=${genreIds}`,
    page,genreIds
  );
    const pages = data.total_pages
    
  return (
    <section className=" mb-[78px] pt-[100px] mx-auto min-h-[100vh] w-full bg-slate-800 flex flex-wrap gap-3 justify-center">
      <Genres
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
        type={"tv"}
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
      ></Genres>
      {data &&
        data.results.map((result) => {
          return <MovieCard {...result} key={result.id} />;
        })}
      <div className="w-full mx-auto flex justify-center py-8">
        {pages > 1 &&  <CustomPagination
          setPage={setPage}
          page={data && data.page}
          total_pages={pages}
        ></CustomPagination>}
       
      </div>
    </section>
  );
};

export default Series;
