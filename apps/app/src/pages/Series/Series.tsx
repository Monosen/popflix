import Layout from '../../layouts/Layout';

import { series } from '../../assets/data';
import { Card } from '../../components/custom/Card';

const Series = () => {
  return (
    <Layout>
      <h2 className="text-4xl">Series</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {series.map(
          (serie, ind) =>
            ind <= 5 && (
              <Card img={serie.img} title={serie.name} key={serie.name} />
            )
        )}
      </div>
    </Layout>
  );
};

export default Series;
