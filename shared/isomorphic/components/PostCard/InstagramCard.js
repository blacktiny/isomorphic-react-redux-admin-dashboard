import React from 'react';
import {
  IoIosImages,
  IoIosVideocam,
  IoIosPlay,
  IoIosHeart,
  IoIosChatbubbles,
} from 'react-icons/io';
import CardWrapper from './InstagramCard.style';

const InstagramCard = ({
  key,
  type,
  image,
  numberOfView,
  numberOfcomment,
  numberOflike,
  onClick,
  className,
}) => {
  return (
    <CardWrapper
      className={`post-card instagram ${className ? className : ''}`}
      key={key}
      onClick={onClick}
    >
      <img src={image} alt="instagram post" />
      {type === 'gallery' && <IoIosImages />}
      {type === 'video' && <IoIosVideocam />}
      <figcaption>
        <ul>
          {type === 'video' ? (
            <li>
              {numberOfView} <IoIosPlay />
            </li>
          ) : (
            <li>
              {numberOflike} <IoIosHeart />
            </li>
          )}
          <li>
            {numberOfcomment} <IoIosChatbubbles />
          </li>
        </ul>
      </figcaption>
    </CardWrapper>
  );
};

export default InstagramCard;
