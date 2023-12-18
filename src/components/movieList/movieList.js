/*import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList*/

//new code with pagination

import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import ReactPaginate from "react-paginate"; // Import react-paginate
//import "./pagination.css"; // You can style the pagination component using this CSS file

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const moviesPerPage = 10; // Number of movies per page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getData();
  }, [currentPage, type]); // Fetch data when currentPage or type changes

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(movieList.length / moviesPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default MovieList;
