import { useContext, useEffect, useState } from 'react';
import Layout from '../../layouts/Layout';
import { MovieContext } from '../../context';
import { useParams } from 'react-router-dom';
import { ImageCarousel, SerialInfo, Video } from '../../components/series';

const Movie = () => {
  const { getMovieById } = useContext(MovieContext);
  const [movie, setMovie] = useState<any>({});
  const [loader, setLoader] = useState(true);
  let { code } = useParams();

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const movie = await getMovieById(code!);
      setMovie(movie);
      setLoader(false);
    } catch (error) {
      console.log('🚀 ~ file: Movie.tsx:23 ~ getMovie ~ error', error);
    }
  };

  if (loader) return <h1>Loading...</h1>;

  return (
    !loader && (
      <Layout>
        <div className="grid grid-cols-2">
          <ImageCarousel img={`../../../public/img/movies/${movie?.image}`} />
          <SerialInfo
            title={movie?.name}
            description={movie?.description}
            category={movie?.categories?.length > 0 ? movie?.categories[0] : ''}
          />
        </div>

        <Video />
      </Layout>
    )
  );
};

export default Movie;
