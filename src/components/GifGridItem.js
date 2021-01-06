import React from 'react';
import "./GifGridItem.css";
export const GifGridItem = ({id, title, url}) => {
  return (
    <div className="gifGridItem animate__animated  animate__wobble">
      <img src={url} alt={title}/>
      <p>{ title }</p>
    </div>
  );
};

