import React from 'react';

const Username = ({name, email, address, company, balance}) => {
  return(
    <div className = 'pa5 ba .br4 ma5 bg-washed-green'>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Company: {company}</p>
      <h4>Balance: {balance}</h4>
    </div>
  );
}

export default Username;
