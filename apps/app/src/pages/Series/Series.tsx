import Layout from '../../layouts/Layout';

import { Card } from '../../components/custom/Card';
import { useContext } from 'react';
import { AuthContext, SerieContext } from '../../context';
import { IUser } from '../../context/interfaces';

interface Props extends IUser {
  role: string[];
}

const Series = () => {
  const { series } = useContext(SerieContext);
  const { user } = useContext(AuthContext) as unknown as { user: Props };

  return (
    <Layout>
      <h2 className="text-4xl">Series</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mt-10 mx-auto place-items-center">
        {series?.map((serie) => (
          <Card
            img={
              serie.image.startsWith('http')
                ? serie.image
                : `../../../public/img/series/${serie.image}`
            }
            id={serie._id}
            type={'serie'}
            role={user?.role[0] === 'admin' ? 'admin' : 'client'}
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
