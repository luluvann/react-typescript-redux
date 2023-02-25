import { ThunkAction } from 'redux-thunk';
import { MoviesActionTypes, LikeMovieAction, UnlikeMovieAction, DeleteMovieAction, FilterMoviesAction, RemoveFilterAction, ActionTypes, NumberOfItemsDisplayedAction, ChangePageAction } from './moviesTypes';
import { MoviesState } from './moviesReducers';
import { movies$ } from '../data/movies';
import Movie from '../interfaces/Movie';
import { Dispatch } from '@reduxjs/toolkit';

export const fetchMovies = (): ThunkAction<void, MoviesState, undefined, MoviesActionTypes> => async dispatch => {
  try {
    const movies = await movies$;
    dispatch({
      type: ActionTypes.FETCH_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeMovie = (movie: Movie) => {
  const movies: Movie[] = []
  movies.push(movie);
  return (dispatch: Dispatch<LikeMovieAction>) => {
    dispatch({
      type: ActionTypes.LIKE_MOVIE,
      payload: movies,
    })
  }
}

export const dislikeMovie = (movie: Movie) => {
  const movies: Movie[] = []
  movies.push(movie);
  return (dispatch: Dispatch<UnlikeMovieAction>) => {
    dispatch({
      type: ActionTypes.UNLIKE_MOVIE,
      payload: movies,
    })
  }
}

export const deleteMovie = (movie: Movie) => {
  const movies: Movie[] = []
  movies.push(movie);
  return (dispatch: Dispatch<DeleteMovieAction>) => {
    dispatch({
      type: ActionTypes.DELETE_MOVIE,
      payload: movies,
    })
  }
}

export const filterMovies = (categories: string[]) => {
  return (dispatch: Dispatch<FilterMoviesAction>) => {
    dispatch({
      type: ActionTypes.FILTER_MOVIES,
      value: categories,
    })
  }
}

export const removeFilter = () => {
  const movies: Movie[] = []
  return (dispatch: Dispatch<RemoveFilterAction>) => {
    dispatch({
      type: ActionTypes.REMOVE_FILTER,
      payload: movies,
    })
  }
}

export const displayMovies = (displayNumber: number) => {
  return (dispatch: Dispatch<NumberOfItemsDisplayedAction>) => {
    dispatch({
      type: ActionTypes.NUMBER_OF_ITEMS_DISPLAYED,
      numberOfItems: displayNumber,
    })
  }
}

export const changePage = (pageSelected: number) => {
  return (dispatch: Dispatch<ChangePageAction>) => {
    dispatch({
      type: ActionTypes.CHANGE_PAGE,
      pageSelected: pageSelected,
    })
  }
}