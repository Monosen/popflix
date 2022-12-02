import Main from '../../layouts/Main';

import { movies } from '../../assets/data';
import { Card } from '../../components/custom/Card';

const Home = () => {
  return (
    <Main>
      <div className="grid grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {movies.map((movie) => (
          <Card
            img={movie.img}
            title={movie.name}
            description={movie.description}
            key={movie.name}
          />
        ))}
      </div>
    </Main>
  );
};

export default Home;
