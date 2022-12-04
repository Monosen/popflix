import { Card } from '../../components/custom';
import Layout from '../../layouts/Layout';
import { useContext } from 'react';
import { AuthContext, MovieContext } from '../../context';
import { IUser } from '../../context/interfaces';

interface Props extends IUser {
  role: string[];
}

const Movies = () => {
  const { movies } = useContext(MovieContext);
  const { user } = useContext(AuthContext) as unknown as { user: Props };

  return (
    <Layout>
      <h2 className="text-4xl">Peliculas</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {movies?.map((movie) => (
          <Card
            url={`/movie/${movie._id}`}
            img={
              movie.image.startsWith('http')
                ? movie.image
                : `../../../public/img/movies/${movie.image}`
            }
            type={'movie'}
            id={movie._id}
            role={user?.role[0] === 'admin' ? 'admin' : 'client'}
            title={movie.name}
            key={movie.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Movies;
