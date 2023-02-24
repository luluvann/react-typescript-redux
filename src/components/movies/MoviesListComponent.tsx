import MovieComponent from '../movie/MovieComponent';
import './MoviesListComponent.scss'
import { useSelector } from 'react-redux';
import Movie from '../../interfaces/Movie';
import { RootState } from '../../store/store';

type Props = {
  movies: Movie[];
  index: number;
}

function MoviesListComponent(props: Props) {

  const currentPage = useSelector((state: RootState) => state.movies.currentPage);

  const display: boolean = currentPage === props.index

  return (
    <>
      {display ? (<div className='movies__list' key={props.index}>
        {props.movies.map((movie) => (
          <MovieComponent movie={movie} />
        ))}
      </div>) : (<></>)}

    </>
  );

}

export default MoviesListComponent;
