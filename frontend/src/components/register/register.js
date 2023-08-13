import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

function Register() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
    }

    const register = () => {
        const { firstName, lastName, email, password, rePassword } = user;
        if (firstName && lastName && email && password && password === rePassword) {
            alert("uploaded ya");
            axios.post("http://localhost:8000/register", user)
                .then(res => console.log(res))
                .catch(error => console.log(error)); // Add error handling
        } else {
            alert("invalid input");
        }
    };


    return (
        <RegisterStyled>
            <div className="reg">
                {console.log("User", user)}
                <h1>Register</h1>
                <input type="text" name="firstName" value={user.firstName} placeholder="Enter your First Name" onChange={handleChange} />
                <input type="text" name="lastName" value={user.lastName} placeholder="Enter your Last Name" onChange={handleChange} />
                <input type="email" name="email" value={user.email} placeholder="Enter your email address" onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
                <input type="password" name="rePassword" value={user.rePassword} placeholder="Re enter your password" onChange={handleChange} />

                <button type="submit" className="regBtn" name="registerBtn" onClick={register}>Register</button>
                <p>Already have account yet? <a href="https://fb.com" target={'_blank'} rel="noreferrer">Log in</a> </p>
            </div>
        </RegisterStyled>
    )
}

const RegisterStyled = styled.div`
.reg{
    width: 400px;
    background: #fff;
    border: 2px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
}

.reg > input{
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 90%;
    font-size: 1rem;
}

.regBtn{
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

export default Register