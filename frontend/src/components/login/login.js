import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
    }

    const login = () => {
        axios
            .post("http://localhost:8000/login", user)
            .then((res) => {
                alert(res.data.message); // This will display the response data from the server
            })
            .catch((error) => {
                alert(error.response.data.message); // This will display the error message sent by the server
            });
    };

    return (
        <LoginStyled>
            <div className="login">
                {console.log("User", user)}
                <h1>Log in</h1>
                <input type="email" name="email" value={user.email} placeholder="Enter your email address" onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
                <button type="button" className="loginBtn" name="loginBtn" onClick={login}>Log in</button>
                <p>Don't have account yet? <a href="https://fb.com" target={'_blank'} rel="noreferrer">Register</a> </p>
            </div>
        </LoginStyled>
    )
}

const LoginStyled = styled.form`
.login{
    width: 400px;
    background: #fff;
    border: 2px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
}

.login > input{
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 90%;
    font-size: 1rem;
}

.loginBtn{
    background: lightblue;
    border: 2px solid pink;
    color: #000;
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    width: 90%;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
}
`;

export default Login