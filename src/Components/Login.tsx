import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

interface IProp {
    setUser: Function;
}
export default function Login(props: IProp) {
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    return (
        <>
            <div>Login</div>
            <section>
                <div>
                    <label>Username:</label>
                    <input onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div>
                    <button onClick={() => {
                        if (username) {
                            props.setUser(username);
                            navigate("/")
                        }
                        else {
                            alert('Enter username')
                        }
                    }}>Login</button>
                </div>
            </section>
        </>
    )

}