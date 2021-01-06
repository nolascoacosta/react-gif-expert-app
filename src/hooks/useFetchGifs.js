import { useState, useEffect } from 'react';
import {getGifs} from "../helpers/getGifs";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifs(category)
      .then(images => {
        setState((prevState) => {
          return {
            data: images,
            loading: false
          }
        })
      })
  },[category]);

  return state;
}