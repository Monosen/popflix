import Layout from '../../layouts/Layout';

import { Card } from '../../components/custom/Card';
import { MovieContext, SerieContext } from '../../context';
import { useContext } from 'react';

const Home = () => {
  const { movies } = useContext(MovieContext);
  const { series } = useContext(SerieContext);

  return (
    <Layout>
      <h2 className="text-4xl">Peliculas</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {movies?.map(
          (movie, ind) =>
            ind <= 5 && (
              <Card
                url={`/movie/${movie._id}`}
                img={
                  movie.image.startsWith('http')
                    ? movie.image
                    : `../../../public/img/movies/${movie.image}`
                }
                title={movie.name}
                key={movie.name}
              />
            )
        )}
      </div>
      <h2 className="text-4xl mt-14">Series</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {series?.map(
          (serie, ind) =>
            ind <= 5 && (
              <Card
                url={`/serie/${serie._id}`}
                img={
                  serie.image.startsWith('http')
                    ? serie.image
                    : `../../../public/img/series/${serie.image}`
                }
                title={serie.name}
                key={serie.name}
              />
            )
        )}
      </div>
    </Layout>
  );
};

export default Home;
