import {ReactComponent as StarFull} from "assets/img/starfull.svg";
import {ReactComponent as StarHalf} from "assets/img/starhalf.svg";
import {ReactComponent as StarEmpty} from "assets/img/staremp.svg";
import "./styles.css";
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;