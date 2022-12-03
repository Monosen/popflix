import Main from '../../layouts/Main';

import { movies, series } from '../../assets/data';
import { Card } from '../../components/custom/Card';

const Home = () => {
  return (
    <Main>
      <h2 className="text-4xl">Peliculas</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {movies.map(
          (movie, ind) =>
            ind <= 5 && (
              <Card img={movie.img} title={movie.name} key={movie.name} />
            )
        )}
      </div>
      <h2 className="text-4xl mt-14">Series</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {series.map(
          (serie, ind) =>
            ind <= 5 && (
              <Card img={serie.img} title={serie.name} key={serie.name} />
            )
        )}
      </div>
    </Main>
  );
};

export default Home;
