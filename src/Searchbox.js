import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
  return(
    <div className='ma5'>
      <input
        type = 'search'
        placeholder = "Enter Client's Name"
        onChange = {searchChange}
      />
    </div>
  );
}

export default Searchbox;
