import React from "react";
import { Chip, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { img_300, img_500, unavailable } from "../config/config";
import Carousel from "../components/Carousel";
const SingleInfo = ({ type }) => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  const { data: cast } = useFetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  console.log(data)

  return (
    <div className=" pb-20 pt-15 min-h-screen  flex-col md:flex-row bg-slate-800 text-white flex ">

      <img
        className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto"
        src={data.poster_path ? `${img_500}/${data.poster_path}` : unavailable}
        alt={data.name || data.title}
      />

      <div className="px-5 flex flex-col pt-20 ">
        <h1 className="text-[2rem] font-bold mb-3">
          {data.name || data.title}{" "}
          <span>({data.release_date || data.first_air_date})</span>
        </h1>
        
        <div className="mb-3">
          {data.genres &&
            data.genres.map((genre) => {
              return (
                <Chip color="primary" key={genre.id} label={genre.name}></Chip>
              );
            })}
        </div>
        <Rating
          readOnly
          max={10}
          value={data && data.vote_average}
          precision={0.1}
        ></Rating>
        <p>{data.overview && data.overview}</p>
       <div className="w-full md:w-[500px] mx-auto my-6 "><Carousel cast={cast.cast}></Carousel></div>
       
         
        
      </div>
    </div>
  );
};

export default SingleInfo;
