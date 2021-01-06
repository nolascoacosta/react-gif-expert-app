import React, { useState, useEffect } from 'react';
import {GifGridItem} from "./GifGridItem";
import "./GifGrid.css"
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {data : images, loading} = useFetchGifs(category);

  return (
    <>

      <h3>{ category }</h3>


      <div className="gifGrid">
        { loading && 'Loading...' }
        { images.map(img => <GifGridItem key={img.id} {...img} />) }

      </div>
    </>
  );
};


