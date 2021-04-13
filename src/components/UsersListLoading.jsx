import React from 'react';
import ContentLoader from 'react-content-loader';

const UsersListLoading = () => (
  <li className="users__item">
    <ContentLoader
      speed={2}
      width={240}
      height={30}
      viewBox="0 0 240 30"
      backgroundColor="#666666"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="3" ry="3" width="240" height="15" />
      <rect x="0" y="18" rx="3" ry="3" width="240" height="10" />
    </ContentLoader>
  </li>
);

export default UsersListLoading;
