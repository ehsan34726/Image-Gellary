import React, { useState, useEffect } from 'react';
import ImageCard from './component/ImageCard';
import ImageSearch from './component/ImageSearch';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTrem] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">

      <ImageSearch searchText={(text) => setTrem(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-3">No Image Found...</h1>}

      {isLoading
        ?
        <h1 className="text-6xl text-center mx-auto mt-3">LOADING...</h1>
        :
        <div className="grid lg:grid-cols-4 gap-4 md:grid-col-1 md:place-items-stretch ">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>}
    </div>
  );
}

export default App;
