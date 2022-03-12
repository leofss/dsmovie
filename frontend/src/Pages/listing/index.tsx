import App from "App";
import Paginatios from "components/Paginatios";
import MovieStars from "components/MovieStars";
import MovieScores from "components/MovieScore";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/Movie";

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);

    //executar a função somente quando carregar o componente 
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
           const data = response.data as MoviePage
           setPageNumber(data.number);
        });
    }, []);



    return (
        <>
        <p>{pageNumber}</p>
            <Paginatios />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                    <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                    <MovieCard />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Listing;