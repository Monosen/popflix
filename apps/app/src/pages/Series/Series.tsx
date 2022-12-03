import Layout from '../../layouts/Layout';

import { Card } from '../../components/custom/Card';
import { useContext } from 'react';
import { SerieContext } from '../../context';

const Series = () => {
  const { series } = useContext(SerieContext);

  return (
    <Layout>
      <h2 className="text-4xl">Series</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {series?.map((serie) => (
          <Card
            img={`../../../public/img/series/${serie.image}`}
            title={serie.name}
            url={`/serie/${serie._id}`}
            key={serie.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Series;
