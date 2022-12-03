import Layout from '../../layouts/Layout';
import { ImageCarousel, Video } from '../../components/series';
import { SerialInfo } from '../../components/series/SerialInfo';

const Serie = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2">
        <ImageCarousel img="" />
        <SerialInfo title="" description="" category="" />
      </div>

      <Video />
    </Layout>
  );
};

export default Serie;
