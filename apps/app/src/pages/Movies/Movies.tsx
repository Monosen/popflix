import { Card } from '../../components/custom';
import Layout from '../../layouts/Layout';
import { useContext } from 'react';
import { MovieContext } from '../../context';

const Movies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <Layout>
      <h2 className="text-4xl">Peliculas</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {movies?.map((movie) => (
          <Card
            url={`/movie/${movie._id}`}
            img={`../../../public/img/movies/${movie.image}`}
            title={movie.name}
            key={movie.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Movies;
