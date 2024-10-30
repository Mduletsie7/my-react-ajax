import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users');
                setUsers(response.data.users);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    };

    fetchUsers();
}, []);

if (loading) return <p>Loading. . .</p>;
if (error) return <p>Error: {error}</p>

return (
    <ul>
        {users.map(user =>(
            <span key={user.id}>
                <h1>{user.firstName} {user.lastName}</h1>
                <h2>{user.email}</h2>
            </span>
        ))}
    </ul>
);
};

export default UserList;