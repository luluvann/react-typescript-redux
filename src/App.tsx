import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import './App.css';
import MoviesListComponent from './components/movies/MoviesListComponent';
import PaginatorComponent from './design-system-components/paginator/PaginatorComponent';
import { changePage, displayMovies, fetchMovies } from './store/moviesActions';
import { MoviesState } from './store/moviesReducers';
import { MoviesActionTypes } from './store/moviesTypes';
import { RootState } from './store/store';

function App() {
  const dispatch = useDispatch<ThunkDispatch<MoviesState, undefined, MoviesActionTypes>>();
  const movies = useSelector((state: RootState) => state.movies.data);
  const numberOfPages = useSelector((state: RootState) => state.movies.numberOfPages);
  const currentPage = useSelector((state: RootState) => state.movies.currentPage);

  function handlePageChange() {
    dispatch(changePage(1))
  }

  function handleOptionChange() {
    dispatch(displayMovies(4))
    console.log("change")
  }
  
  const filteredMovies = movies.filter((movie) => movie.isShowing == true)

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <DropdownComponent movies={movies} /> */}
      <MoviesListComponent index={1} movies={filteredMovies} />
      <PaginatorComponent numberOfPages={numberOfPages} currentPage={currentPage} displayOptions={[4,8,20]} handleOptionChange={handleOptionChange} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default App;
