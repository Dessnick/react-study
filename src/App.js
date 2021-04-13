import React from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserListLoading from './components/UserListLoading';

function App() {
  const [users, setUsers] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [noUsers, setNoUsers] = React.useState(false);

  const onChangePage = () => {
    setPage((page) => page + 1);
  };

  React.useEffect(() => {
    axios
      .get(`https://5c3755177820ff0014d92711.mockapi.io/users?page=${page}&limit=10`)
      .then(({ data }) => {
        setUsers((users) => [...users, ...data]);
        setLoading(false);
        if (!data.length) {
          setNoUsers(true);
        }
      });
    setLoading(true);
  }, [page]);

  return (
    <div className="app">
      <input
        type="text"
        className="form-control"
        placeholder="Поиск пользователя..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <ul className="users">
        {users
          .filter((obj) => {
            const lowerName = obj.name.toLowerCase();
            const lowerEmail = obj.email.toLowerCase();
            const lowerInputValue = inputValue.toLowerCase();
            return lowerName.includes(lowerInputValue) || lowerEmail.includes(lowerInputValue);
          })
          .map((obj) => (
            <UserList key={obj.id} name={obj.name} email={obj.email} />
          ))}
        {loading &&
          Array(10)
            .fill(0)
            .map((_, index) => <UserListLoading key={index} />)}
      </ul>
      {!noUsers && (
        <button onClick={onChangePage} className={`${loading || noUsers ? 'disabled' : 'default'}`}>
          {loading ? 'Wait...' : 'Next 10 users'}
        </button>
      )}
    </div>
  );
}

export default App;
