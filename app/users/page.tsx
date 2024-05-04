import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        // cache system
        // If I don't want to cache
        // {cache: 'no-store'}
        //if want to store cache then 
        {next: { revalidate: 10 }}
        );
    if (!res.ok){
        throw new Error('Failed to fetch data')
    }
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {users.map( user => <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>)}
            </tbody>
        </table>
    </>
  )
}

export default UsersPage