import { FC } from 'react';

interface Props {
  img: string;
}

export const ImageCarousel: FC<Props> = ({ img }) => {
  return (
    <div>
      <div className="carousel max-w-[400px] rounded-box ml-[118px]">
        <div id="slide1" className="carousel-item relative">
          <img
            src={'https://placeimg.com/400/225/arch'}
            className="w-[400px] h-[500px] object-cover"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative">
          <img
            src={'https://placeimg.com/400/225/arch'}
            className="w-[400px] h-[500px] object-cover"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-3 py-2 gap-2">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};
