import { useEffect , useState} from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import CustomPagination from "../components/Pagination";
const Trending = () => {
  const [page, setPage] = useState(1);
  const { error, data, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`, page
  );
 
  return <section className=" mb-[78px] pt-[100px] mx-auto min-h-[100vh] w-full bg-slate-800 flex flex-wrap gap-3 justify-center">
    {data && data.results.map(result=>{
      return <MovieCard {...result}  key={result.id}/>
    })}
    <div className="w-full mx-auto flex justify-center py-8">
    <CustomPagination setPage={setPage} page={data && data.page} ></CustomPagination></div>
  </section>;
};

export default Trending;
