import React, { useState } from 'react'

export default function Fetchapi() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        // alert('okay')
        let response = await fetch(" https://reqres.in/api/users?page=1")
        let result = await response.json()
        console.log(result)
        setUsers(result.data)
    }
    return (
        <>
        <div className="loading"></div>

        <div className="background">
            <h1 className="heading">Lets grow more task 2</h1>
            <h1 className="name">BY JIYAN PATIL </h1>
            <button onClick={getUsers} className="btn btn-primary name">
                click me
            </button>
            <div className="render">
                
                {users.map(({ id, email, first_name, last_name, avatar }) => (
                    
                    <div class="card">
                        <img src={avatar} alt="Avatar" className="img" />
                        <div className="container">
                            <h2>{id}</h2>
                            <h4><b>{first_name} {last_name}</b></h4>
                            <p>Email {email}</p>
                        </div>
                    </div>
                ))}
{/* 
                {users.map(({ id, email, first_name, last_name, avatar }) => (
                    <li className="li" key={id}>
                    <img className="dp" src={avatar}></img>
                    <li className="li1">Name : {first_name} {last_name}</li>
                    <li className="li1">Email ID : {email}</li>
                    </li>
                ))} */}
            </div>
                </div>
        </>
    )
}
