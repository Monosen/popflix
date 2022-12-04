import { FC } from 'react';

interface Props {
  video: string;
}

export const Video: FC<Props> = ({ video }) => {
  return (
    <iframe
      className="mx-auto mt-14"
      width="560"
      height="315"
      src={video}
      title="YouTube video player"
      frameBorder={'0'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
