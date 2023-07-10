import React, { useState } from "react";
import {
  img_300,
  img_500,
  unavailable,
  unavailableLandscape,
  noPicture,
} from "../config/config";
import { Link } from "react-router-dom";
const MovieCard = ({
  id,
  release_date,
  first_air_date,
  name,
  poster_path,
  title,
  vote_average,
  adult,
}) => {

  
  return (
    <Link to={`/${name? "series":"movies"}/${id}`}>
    <div  className="shadow-md bg-gray-900 relative text-white flex flex-col w-1/2 md:w-52 rounded-md p-1 hover:bg-slate-300 hover:text-slate-800">
      
      {adult && (
        <div className="rounded-full font-bold p-1 bg-red-600 text-white text-sm absolute top-0 right-0">
          18+
        </div>
      )}
      <img
        className="rounded-md mb-1"
        src={poster_path ? `${img_300}/${poster_path}` : unavailable}
        alt=""
      />
      <b className="text-lg text-center">{title || name}</b>
      <span className="flex justify-between">
        {release_date || first_air_date} <span>{vote_average}/10</span>
      </span>
    </div></Link>
  );
};

export default MovieCard;



