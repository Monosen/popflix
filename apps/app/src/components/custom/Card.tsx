import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  img: string;
  url: string;
  author?: string;
}
// 'https://placeimg.com/250/300/arch'
export const Card: FC<Props> = ({ img, title, author = '', url }) => {
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
        </div>
      </div>
    </div>
  );
};
