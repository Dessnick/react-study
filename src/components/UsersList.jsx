import React from 'react';

function UsersList({ name, email }) {
  return (
    <li className="users__item">
      <div className="users__item-name">{name}</div>
      <div className="users__item-email">{email}</div>
    </li>
  );
}

export default UsersList;
