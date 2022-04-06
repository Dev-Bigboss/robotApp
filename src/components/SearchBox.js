import React from 'react';

function SearchBox ({ searchfield, searchChange }) {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--blue bg-transparent'
                type='search'
                placeholder='search player'
                onChange={searchChange}
                />
         </div>
    );
}
export default SearchBox;