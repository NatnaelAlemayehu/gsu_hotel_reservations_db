"use client"

import { useEffect, useState } from "react"

export default function Guests() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('/api/users')
                const response = await data.json()
                setUsers(response)
                console.log(response) 
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()        
    }, [])
    return (        
      <div>
        <h1>Guests</h1>
        {users.map(user => (
            <div>
                {user.name}
            </div>
        ))}
      </div>
    );
  }
  