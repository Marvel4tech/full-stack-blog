import React from 'react'

const Search = () => {
  return (
    <div className=' bg-gray-100 p-2 rounded-full flex items-center'>
        <input 
            type="text"
            placeholder='search a post...'
            className=' bg-transparent'
        />
    </div>
  )
}

export default Search