import Layout from '../../layouts/Layout';
import { ImageCarousel, Video } from '../../components/series';
import { SerialInfo } from '../../components/series/SerialInfo';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { SerieContext } from '../../context';

const Serie = () => {
  const { getSerieById } = useContext(SerieContext);
  const [serie, setSerie] = useState<any>({});
  const [loader, setLoader] = useState(true);
  let { code } = useParams();

  useEffect(() => {
    getSerie();
  }, []);

  const getSerie = async () => {
    try {
      const serie = await getSerieById(code!);
      setSerie(serie);
      setLoader(false);
    } catch (error) {
      console.log('🚀 ~ file: Serie.tsx:29 ~ getSerie ~ error', error);
    }
  };

  if (loader) return <h1>Loading...</h1>;

  return (
    !loader && (
      <Layout>
        <div className="grid grid-cols-2">
          <ImageCarousel
            img={
              serie.image.startsWith('http')
                ? serie.image
                : `../../../public/img/series/${serie?.image}`
            }
          />
          <SerialInfo
            title={serie?.name}
            description={serie?.description}
            category={serie?.categories?.length > 0 ? serie?.categories[0] : ''}
          />
        </div>

        <h3 className="text-5xl text-center mt-14">Video</h3>
        {serie.video.length > 10 && <Video video={serie?.video} />}
      </Layout>
    )
  );
};

export default Serie;
