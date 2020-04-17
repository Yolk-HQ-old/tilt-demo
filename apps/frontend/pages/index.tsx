import React, { useEffect, useState } from 'react';

export const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch('http://localhost:3333/api', { signal })
      .then(res => res.json())
      .then(json => setUsers(json));

    return () => controller.abort();
  }, []);

  return (
    <div>
      <header>
        <h1>Users</h1>
      </header>
      <main>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Index;
