import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding-bottom: 100px;
  & .logo {
    width: 235px;
  }
  & .text {
    margin-top: 20px;
    font-size: 1.25rem;
    letter-spacing: 2px;
    & span {
      color: rgb(109, 76, 215);
    }
  }
  & .seperator {
    height: 1px;
    width: 60%;
    background: rgba(85, 87, 96, 0.1);
    margin: 40px auto;
  }
  & .links {
    a {
      margin-left: 15px;
      color: #555760;
      text-decoration: none;
      font-size: 1rem;
    }
  }
  & .copyright {
    margin-top: 20px;
    font-size: 1rem;
  }
  }
`

const FooterSection = () => {
  return (
    <Container>
      <div className="logo">
        <img src="/imgs/logo-vertical.svg" alt="logo" />
      </div>
      <div className="text">OWN THE MOMENTS THAT <span>MATTER</span></div>
      <div className="seperator"></div>
      <div className="links">
        <a href="">Privacy Policy</a>
        <a href="">Terms of  Service</a>
      </div>
      <div className="copyright">
        Copyright © 2021 Momento NFT. All rights reserved. 
      </div>
    </Container>
  )
}

export { FooterSection }