import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import './App.css';
import MoviesListComponent from './components/movies/MoviesListComponent';
import MultipleSelectComponent from './components/multipleSelect/MultipleSelectComponent';
import PaginatorComponent, { PaginatorProps } from './design-system-components/paginator/PaginatorComponent';
import Movie from './interfaces/Movie';
import { changePage, displayMovies, fetchMovies, filterMovies } from './store/moviesActions';
import { MoviesState } from './store/moviesReducers';
import { MoviesActionTypes } from './store/moviesTypes';
import { RootState } from './store/store';

function App() {
  const dispatch = useDispatch<ThunkDispatch<MoviesState, undefined, MoviesActionTypes>>();
  const movies = useSelector((state: RootState) => state.movies.data);
  const currentPage = useSelector((state: RootState) => state.movies.currentPage);
  const numberOfItemsPerPage = useSelector((state: RootState) => state.movies.numberOfItemsPerPage);

  function handleOptionChangeMultiselect(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOptions = Array.from(event.target.options)
      .filter(option => option.selected)
      .map(option => option.value);
      console.log(selectedOptions)
    dispatch(filterMovies(selectedOptions))
  }

  function handlePageChange(pageClicked: number) {
    dispatch(changePage(pageClicked))
  }

  function handleOptionChangePaginator(event: React.ChangeEvent<HTMLSelectElement>) {
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

  const filteredMovies = movies.filter((movie) => movie.isShowing == true)
  const groupedMovies = groupArrayByN(filteredMovies, numberOfItemsPerPage)

  const paginatorProperties: PaginatorProps = {
    totalNumberOfItems: filteredMovies.length,
    numberOfItemsToDisplayPerPage: numberOfItemsPerPage,
    currentPage: currentPage,
    displayOptions: [4, 8, 20],
  }

  function getCategoryOptions() {
    const categoryOptions: string[] = []
    movies.map((movie) => {
      if (!categoryOptions.includes(movie.category)) {
        categoryOptions.push(movie.category);
      }
    })
    return categoryOptions
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <MultipleSelectComponent options={getCategoryOptions()} handleOptionChange={handleOptionChangeMultiselect} />

      {groupedMovies.map((group, index) => (
        <MoviesListComponent index={index} movies={group} />
      ))}

      <PaginatorComponent properties={paginatorProperties} handleOptionChange={handleOptionChangePaginator} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
