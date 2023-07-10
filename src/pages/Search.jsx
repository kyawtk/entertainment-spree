import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { Tabs, Tab } from "@mui/material";
import CustomPagination from "../components/Pagination";
import MovieCard from "../components/MovieCard";
const Search = () => {
  const [value, setValue] = useState("movie");
  const [type, setType] = useState("movie");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    setType(newValue);
  };
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const { data, error, getData } = useFetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${text.replace(
      " ",
      "%20"
    )}&include_adult=true&language=en-US&page=${page}`,
    page,
    "",
    type
  );
  const pages = data.total_pages;
  const handleSearch = (e) => {
    setText(e.target.value);
  };
  function search() {
    getData(
      `https://api.themoviedb.org/3/search/${type}?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${text.replace(
        " ",
        "%20"
      )}&include_adult=true&language=en-US&page=${page}`
    );
    setPage(1);
  }
  console.log(data);
  return (
    <section className=" mb-[78px] pt-[100px] mx-auto min-h-[100vh] w-full bg-slate-800 flex flex-col">
      <div className="flex justify-center items-center ">
        <input
          className=" w-2/3  placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          value={text}
          onChange={handleSearch}
        />
        <button
          onClick={search}
          className="text-white bg-slate-500 rounded-md shadow-sm p-3 mx-5"
        >
          <FaSearch />
        </button>
      </div>
      <div className="flex justify-center">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="movie" label="Movies" />
        <Tab value="tv" label="Series" />
      </Tabs></div>
      <div className=" flex flex-wrap gap-3 justify-center">
        {data &&
          data.results.map((result) => {
            return <MovieCard {...result} key={result.id} />;
          })}
        <div className="w-full mx-auto flex justify-center py-8">
          {pages > 1 && (
            <CustomPagination
              setPage={setPage}
              page={data && data.page}
              total_pages={pages}
            ></CustomPagination>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
