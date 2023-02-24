import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ButtonComponent, { Button, ButtonVariants } from "../../design-system-components/button/ButtonComponent";
import Movie from "../../interfaces/Movie";
import { deleteMovie, dislikeMovie, likeMovie } from "../../store/moviesActions";
import { MoviesState } from "../../store/moviesReducers";
import { MoviesActionTypes } from "../../store/moviesTypes";
import './MovieComponent.scss'

type Props = {
  movie: Movie;
}

function MovieComponent(props: Props) {

  const dispatch = useDispatch<ThunkDispatch<MoviesState, undefined, MoviesActionTypes>>();

  // Components properties objects builders
  const buttonsProperties: Button[] = [
    { icon: faXmark, variant: ButtonVariants.DELETE, handleClick: () => dispatch(deleteMovie(props.movie)) },
    { icon: faThumbsUp, variant: ButtonVariants.PRIMARY, text: props.movie.likes.toString(), handleClick: () => dispatch(likeMovie(props.movie)) },
    { icon: faThumbsDown, variant: ButtonVariants.PRIMARY, text: props.movie.dislikes.toString(), handleClick: () => dispatch(dislikeMovie(props.movie)) },
  ]

  // Components to render builder
  const Buttons = buttonsProperties.map((button) => (<ButtonComponent properties={button} />))

  return (
    <div className="movie__container">
      <h1>{props.movie.title}</h1>
      <h2>{props.movie.category}</h2>
      <div className="buttons__container">
        {Buttons}
      </div>
    </div>
  );

}

export default MovieComponent;
