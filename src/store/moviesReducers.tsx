import Movie from '../interfaces/Movie';
import { MoviesActionTypes, ActionTypes } from './moviesTypes';

export interface MoviesState {
  data: Movie[];
  numberOfItemsPerPage: number;
  currentPage: number;
  numberOfPages: number;
}

const initialState: MoviesState = {
  data: [],
  numberOfItemsPerPage: 20,
  currentPage: 1,
  numberOfPages: 1
};

const moviesReducer = (state = initialState, action: MoviesActionTypes): MoviesState => {
  switch (action.type) {

    case ActionTypes.FETCH_MOVIES_SUCCESS:
      if ('payload' in action) {
        const updatedData = action.payload.map((movie) => { return { ...movie, isShowing: true } });
        const numberOfItemsPerPage = state.numberOfItemsPerPage
        const newNumberOfPages = Math.ceil(updatedData.filter(x => x.isShowing).length / numberOfItemsPerPage)
        return {
          ...state,
          data: updatedData,
          numberOfPages: newNumberOfPages
        };
      }
      return state;

    case ActionTypes.LIKE_MOVIE:
      if ('payload' in action) {
        const updatedData = state.data.map(movie => {
          if (movie === action.payload[0]) {
            return {
              ...movie,
              likes: movie.likes + 1,
            };
          }
          return movie;
        });

        return {
          ...state,
          data: updatedData,
        };
      }
      return state;

    case ActionTypes.UNLIKE_MOVIE:
      if ('payload' in action) {
        const updatedData = state.data.map(movie => {
          if (movie === action.payload[0]) {
            return {
              ...movie,
              dislikes: movie.dislikes + 1,
            };
          }
          return movie;
        });

        return {
          ...state,
          data: updatedData,
        };
      }
      return state;

    case ActionTypes.DELETE_MOVIE:
      if ('payload' in action) {
        const updatedData = state.data.filter((movie) => movie !== action.payload[0]);
        return {
          ...state,
          data: updatedData,
        };
      }
      return state;

    case ActionTypes.FILTER_MOVIES:
      if ('value' in action) {
        const updatedData = state.data.map((movie) => action.value.includes(movie.category) ? { ...movie, isShowing: true } : { ...movie, isShowing: false });
        const numberOfItemsPerPage = state.numberOfItemsPerPage
        const newNumberOfPages = Math.ceil(updatedData.filter(x => x.isShowing).length / numberOfItemsPerPage)
        return {
          ...state,
          data: updatedData,
          numberOfPages: newNumberOfPages,
          currentPage: 1,
        };
      }
      return state;

    case ActionTypes.REMOVE_FILTER:
      if ('payload' in action) {
        const updatedData = state.data.map((movie) => { return { ...movie, isShowing: true } });
        return {
          ...state,
          data: updatedData,
        };
      }
      return state;

      case ActionTypes.NUMBER_OF_ITEMS_DISPLAYED:
        if ('numberOfItems' in action) {
          return {
            ...state,
            numberOfItemsPerPage: action.numberOfItems,
            currentPage: 1,
          };
        }
        return state;

        case ActionTypes.CHANGE_PAGE:
        if ('pageSelected' in action) {
          return {
            ...state,
            currentPage: action.pageSelected,
          };
        }
        return state;
    default:
      return state;
  }
};

export default moviesReducer;