import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  category: string;
}

export const SerialInfo: FC<Props> = ({ title, description, category }) => {
  return (
    <div className="flex flex-col space-y-5 lg:pl-">
      <h2 className="text-2xl text-white font-bold">
        {title.replaceAll('-', ' ')}
        <div className="badge badge-secondary text-xs">{category}</div>
      </h2>
      <p className="text-lg">
        <span className="text-white">By (author):</span> Lucinda Riley
      </p>
      <p>
        <span className="text-white">Formato de video:</span> MP4
      </p>
      {/* Tabs */}
      <div className="tabs pt-12">
        <button type="button" className="tab tab-lg tab-lifted tab-active">
          Description
        </button>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
};
