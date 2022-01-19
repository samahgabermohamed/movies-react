import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import MoviesDetails from "./Movies";
import "./Movie.css";
export default function WatchMovie() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8ffe261a9c4c4e7916cee94d0d97a8dd`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Details</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} style={{width:300}} className="card-img-top" alt="img_movie"/>
      <h4>Movie Name : {details.title}</h4>
      <h5>review : {details.overview}</h5>
    </div>
  );
}