import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/movies/MovieContext';
import { SerieContext } from '../../context/series/SerieContext';

interface Props {
  title: string;
  img: string;
  url: string;
  author?: string;
  role?: string;
  type?: string;
  id?: string;
}
// 'https://placeimg.com/250/300/arch'
export const Card: FC<Props> = ({
  img,
  title,
  author = '',
  url,
  role,
  type,
  id,
}) => {
  const { deleteSerie } = useContext(SerieContext);
  const { deleteMovie } = useContext(MovieContext);

  return (
    <div className="card bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl w-[250px] h-[300px]" />
      </figure>
      <div className=" card-body items-center text-center">
        <h2 className="card-title text-white">{title.replaceAll('-', ' ')}</h2>
        <p>{author}</p>
        <div className="card-actions">
          <Link to={url} className="btn btn-primary">
            Ver Ahora
          </Link>
          {role === 'admin' && (
            <div
              onClick={(e) =>
                type === 'movie' ? deleteMovie(id!) : deleteSerie(id!)
              }
              className="btn bg-red-500 text-white"
            >
              Borrar
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
