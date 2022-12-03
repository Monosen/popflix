import { movies } from '../../assets/data';
import { Card } from '../../components/custom';
import Layout from '../../layouts/Layout';

const Movies = () => {
  return (
    <Layout>
      <h2 className="text-4xl">Peliculas</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {movies.map((movie, ind) => (
          <Card img={movie.img} title={movie.name} key={ind} />
        ))}
      </div>
    </Layout>
  );
};

export default Movies;
