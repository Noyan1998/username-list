import React from 'react';
import Username from './Username';
import { usernameslist } from './usernameslist';

const List = () => {
  const userList = usernameslist.map((user, i) =>
    <Username
      key = {i}
      name={usernameslist[i].name}
      email={usernameslist[i].email}
      address={usernameslist[i].address}
      company={usernameslist[i].company}
      balance={usernameslist[i].balance}
    />)
  return(
    <div>
      {userList}
    </div>
  );
}

export default List;
