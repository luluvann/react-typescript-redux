import { Action } from 'redux';
import Movie from '../interfaces/Movie';

export enum ActionTypes {
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  UNLIKE_MOVIE = 'UNLIKE_MOVIE',
  DELETE_MOVIE = 'DELETE_MOVIE',
  FILTER_MOVIES = 'FILTER_MOVIES',
  REMOVE_FILTER = 'REMOVE_FILTER',
  LIKE_MOVIE = 'LIKE_MOVIE',
  NUMBER_OF_ITEMS_DISPLAYED = "NUMBER_OF_ITEMS_DISPLAYED",
  CHANGE_PAGE = "CHANGE_PAGE",
}

interface FetchMoviesSuccessAction {
  type: ActionTypes.FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

export interface LikeMovieAction {
  type: ActionTypes.LIKE_MOVIE;
  payload: Movie[];
}

export interface UnlikeMovieAction {
  type: ActionTypes.UNLIKE_MOVIE;
  payload: Movie[];
}

export interface DeleteMovieAction {
  type: ActionTypes.DELETE_MOVIE;
  payload: Movie[];
}

export interface FilterMoviesAction {
  type: ActionTypes.FILTER_MOVIES;
  value: string[];
}

export interface RemoveFilterAction {
  type: ActionTypes.REMOVE_FILTER;
  payload: Movie[];
}

export interface NumberOfItemsDisplayedAction {
  type: ActionTypes.NUMBER_OF_ITEMS_DISPLAYED;
  numberOfItems: number;
}

export interface ChangePageAction {
  type: ActionTypes.CHANGE_PAGE;
  pageSelected: number;
}

export type MoviesActionTypes = FetchMoviesSuccessAction | Action | LikeMovieAction | UnlikeMovieAction | DeleteMovieAction | FilterMoviesAction | RemoveFilterAction | NumberOfItemsDisplayedAction | ChangePageAction;