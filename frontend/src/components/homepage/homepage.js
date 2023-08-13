import React from "react";
import styled from "styled-components";

function Homepage({ setLoginUser }) {
    return (
        <HomepageStyled>
            <div className="hp">
                <h1>Hello Homepage</h1>
                <div className="btn" onClick={() => setLoginUser({})}>
                    Log out
                </div>
            </div>
        </HomepageStyled>
    )
}

const HomepageStyled = styled.div`
    .hp{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 600px;
        height: 300px;
        border-radius: 20px;
        box-shadow: 0 0 15px 5px: lightblue;
        background: white;
        position: relative;
    }

    .hp > .btn{
        background: lightblue;
        border: 2px solid pink;
        color: #fff;
        font-size: 1.25rem;
        padding: 0.5rem;
        margin: 0.05rem 0;
        border-radius: 8px;
        outline: none;
        user-select: none;
        cursor: pointer;
    }
`;

export default Homepage