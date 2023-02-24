import Movie from "../../interfaces/Movie";
import './MovieComponent.scss'

type Props = {
    movie: Movie;

  }
  
  function MovieComponent(props: Props) {
  
   
  
    return (
     <div className="movie__container">
        <h1>{props.movie.title}</h1>
        <h2>{props.movie.category}</h2>
        <div className="buttons__container">

        </div>
     </div>
    );
  
  }
  
  export default MovieComponent;
  