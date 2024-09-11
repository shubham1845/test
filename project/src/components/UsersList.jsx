import React, { useState, useEffect } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">User List</h1>
      <ul className="mt-4 space-y-2">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-2 bg-gray-100 rounded-lg shadow-sm">
              {user.name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}
