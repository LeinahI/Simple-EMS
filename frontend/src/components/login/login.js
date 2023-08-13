import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login({ setLoginUser }) {

    const navigate = useNavigate()

    const [user, setUser] = useState({})

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
                alert(res.data.message) // This will display the response data from the server
                setLoginUser(res.data.user)
                navigate("/")
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    alert(error.response.data.message); // Display the error message sent by the server
                } else {
                    alert("An error occurred while logging in.");
                }
            });
    };

    return (
        <LoginStyled>
            <div className="login">
                <h1>Log in</h1>
                <input type="email" name="email" value={user.email} placeholder="Enter your email address" onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
                <button type="button" className="loginBtn" name="loginBtn" onClick={login}>Log in</button>
                <p>Don't have account yet? <span onClick={() => navigate('/register')}>Register</span> </p>
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
span{
    cursor: pointer;
    text-decoration: underline;
    font-weight: bold;
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