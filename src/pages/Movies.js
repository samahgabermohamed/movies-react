import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Movie.css";


export default function MoviesDetails() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=8ffe261a9c4c4e7916cee94d0d97a8dd")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
      console.log(movies)
  return (
    <div className="container">
    <h1 >Movies recommended for you</h1>
    <div className="row">
      {movies.map((movie) => {
      return (
        <div className="card col-3 offset-1 " style={{width:"18 rem"}} key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  className="card-img-top" alt="movie_img"/>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <Link to={`/watchMovie/${movie.id}`} className="btn btn-dark">Watch Movie</Link>
        </div>
      </div>
      )})}
    </div>
    </div>
    );

}


