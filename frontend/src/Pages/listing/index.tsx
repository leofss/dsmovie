import App from "App";
import Paginations from "components/Paginatios";
import MovieStars from "components/MovieStars";
import MovieScores from "components/MovieScore";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/Movie";

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
            content: [],
            last: true,
            totalPages: 0,
            totalElements: 0,
            size: 12,
            number: 0,
            first: true,
            numberOfElements: 0,
            empty: true
        });
    //executar a função somente quando carregar o componente 
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
           const data = response.data as MoviePage
           setPage(data);
        });
    }, [pageNumber]);

    const HandlePageChange = (NewPageNumber : number) => {
        setPageNumber(NewPageNumber)
    }
    return (
        <>
            <Paginations page={page} onChange={HandlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3"> 
                        <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>

    );
}

export default Listing;