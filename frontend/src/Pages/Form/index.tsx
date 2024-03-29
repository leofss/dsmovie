import App from "App";
import FormCard from "components/FormCard";
import { Link, useParams } from "react-router-dom";
import { Movie } from "types/Movie";


function Form() {
    const params = useParams();


    return (
     <FormCard movieId={`${params.movieId}`}/>   
    );
    }

export default Form;