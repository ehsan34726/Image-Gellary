import React from 'react';

const ImageCard = ( { image } ) => {
    const tags = image.tags.split (',');

    return (
        <div className="lg:max-w-sm md:max-w-full rounded mx-2 overflow-hidden shadow-lg ">
            <img src={image.webformatURL} alt="" className="w-full transform hover:scale-125 transition ease-out duration-300" />
            <div className="px-6 py-8">
                <div className="font-bold text-black-500 lg:text-xl mb-2 md:text-center md:text-sm">
                    PC: <h1 className="font-bold uppercase text-green-500 lg:text-xl mb-2 md:text-center md:text-sm">{image.user}</h1>
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>likes:</strong>
                        {image.likes}
                    </li>

                </ul>
            </div>
            <div className="px-6 py-4">
              {tags.map ((tag, index )=> (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #{tag}
              </span>
              ))}
            </div>
        </div>
    );
}

export default ImageCard
