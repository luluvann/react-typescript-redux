import Movie from "../../interfaces/Movie";

type Props = {
    movie: Movie;

  }
  
  function MovieComponent(props: Props) {
  
   
  
    return (
     <div className="movie__container">

        {props.movie.title}
     </div>
    );
  
  }
  
  export default MovieComponent;
  