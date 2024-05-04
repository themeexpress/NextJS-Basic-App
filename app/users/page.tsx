import React from 'react'

interface User {
    id: number;
    name: string;
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

    console.log(res)

  return (
    <>
        <h1>Users</h1>
        <ul>
            {users.map( user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default UsersPage