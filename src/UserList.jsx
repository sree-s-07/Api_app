import { useState } from "react";
import { useEffect } from "react";

const UserList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUsersData = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users',{method: 'GET'})
            const userData = await res.json();
            setData(userData)
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsersData();
    }, []);

    if (loading) return <div className="text-4xl">Loading...</div>
    if (error) return <div className="text-4xl text-red-500">{error}</div>

    return (
        <div>
            <h1 className="text-center">User List</h1>
            {
                data.map(user => <div key={user.id} >
                    <h3>Name: {user.name}</h3>
                    <h3>Name: {user.username}</h3>
                    <h3>Email: {user.email}</h3>
                    <hr />
                </div>)
            }
        </div>
    )
}

export default UserList