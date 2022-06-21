import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center mx-2 border-b-2 md:mx-2 lg:mx-4 border-teal-500 py-2">
        <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full 
            text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 " 
            type="text" placeholder="Search Image..." />
        <button className="flex-shrink-0 bg-green-500 hover:bg-green-600 border-green-500 
            hover:border-green-600 text-sm border-4 text-white py-1 px-2 rounded" 
            type="submit">
             Search
      </button>
      </div>
      </form>
		</div>
  )
}

export default ImageSearch;