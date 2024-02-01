import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Alice", age: 24, isActive: true },
    { id: 2, name: "Bob", age: 30, isActive: false },
    { id: 3, name: "Charlie", age: 28, isActive: true },
    { id: 4, name: "Diana", age: 22, isActive: false },
    { id: 5, name: "Diana", age: 25, isActive: true },
  ];

  const activeUsers = users.filter((user) => {
    return user.isActive;
  });

  const getCharlie = users.find((user) => {
    return user.name === "Charlie";
  });

  const sortedArray = [...users].sort((a, b) => {
    return a.age - b.age;
  });

  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          );
        })}
      </ul>
      <h2>Active Users</h2>
      <ul>
        {activeUsers.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          );
        })}
      </ul>
      <h2>Specific user</h2>
      <ul>
        <li>
          {getCharlie.name} {getCharlie.age}
        </li>
      </ul>
      <h2>Sorted Users</h2>
      <ul>
        {sortedArray.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
