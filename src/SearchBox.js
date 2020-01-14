import React from 'react';
 
const SearchBox = ({ searchChange }) => {

    return (
        <div className='pa2'>
            <input
             className='pa3 ba b--green bg-lightest-blue'
             type='search'
             placeholder='search robots'
             // onChange is a HTML listener that looks for an event
             onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;