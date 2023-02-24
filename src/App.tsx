import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import './App.css';
import MoviesListComponent from './components/movies/MoviesListComponent';
import PaginatorComponent, { PaginatorProps } from './design-system-components/paginator/PaginatorComponent';
import Movie from './interfaces/Movie';
import { changePage, displayMovies, fetchMovies } from './store/moviesActions';
import { MoviesState } from './store/moviesReducers';
import { MoviesActionTypes } from './store/moviesTypes';
import { RootState } from './store/store';

function App() {
  const dispatch = useDispatch<ThunkDispatch<MoviesState, undefined, MoviesActionTypes>>();
  const movies = useSelector((state: RootState) => state.movies.data);
  const currentPage = useSelector((state: RootState) => state.movies.currentPage);
  const numberOfItemsPerPage = useSelector((state: RootState) => state.movies.numberOfItemsPerPage);

  function handlePageChange(pageClicked: number) {
    dispatch(changePage(pageClicked))
  }

  function handleOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(displayMovies(parseInt(event.target.value)))

  }

  function groupArrayByN(array: Movie[], n: number): Movie[][] {
    const groups: Movie[][] = [];
    let i: number = 0;

    while (i < array.length) {
      groups.push(array.slice(i, i + n));
      i += n;
    }
    return groups;
  }

  let filteredMovies = movies.filter((movie) => movie.isShowing == true)
  let groupedMovies = groupArrayByN(filteredMovies, numberOfItemsPerPage)

  let paginatorProperties: PaginatorProps = {
    totalNumberOfItems: filteredMovies.length,
    numberOfItemsToDisplayPerPage: numberOfItemsPerPage,
    currentPage: currentPage,
    displayOptions: [4, 8, 20],
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <DropdownComponent movies={movies} /> */}
      {groupedMovies.map((group, index) => (
        <MoviesListComponent index={index} movies={group} />
      ))}
      <PaginatorComponent properties={paginatorProperties} handleOptionChange={handleOptionChange} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
