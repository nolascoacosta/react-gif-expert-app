import React, { useState } from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(
    ['One Punch']
  );

 /* const handleAdd = () => {
    //setCategories([ ...categories, 'Hunter' ]);
    setCategories (cats => [...cats, 'Hunter 2']);
  }*/
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr/>

      {
        categories.map((cat,index) =>
          <GifGrid
            key={cat}
            category={cat}
          />
          )
      }
    </div>
  );
};

