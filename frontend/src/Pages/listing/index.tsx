import App from "App";
import Paginatios from "components/Paginatios";
import MovieStars from "components/MovieStars";
import MovieScores from "components/MovieScore";
import MovieCard from "components/MovieCard";

function Listing() {
    return (
        <>
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