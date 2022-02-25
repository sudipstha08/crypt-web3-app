import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const HeaderWrapper = styled.div`
  max-width: 1200px;
  padding: 25px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .logo {
    img {
    
    }
  }
  & .right-section {
    display: flex;
    align-items: center;
    & .faqs {
      font-size: 1.25rem;
      color:rgb(64, 78, 237);
      width: 125px;
      padding: 0 10px;
    }
    & .about {
      font-size: 1.25rem;
      color:#404EED;
      width: 160px;
      padding: 0 10px
    }
    & .discord {
      border-radius: 25px;
      height: 60px;
      background: #404EED;
      width: 221px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      & img {
        width: 180px;
        height: 40px;
        cursor: pointer;
      }
    }
    & .feedback {
      width: 233px;
      height: 60px;
      border-radius: 25px;
      @keyframes gradientBackgroundAnimation {
        animation-direction: normal;
        animation-delay: 0;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-play-state: running;
      }
      button {
        background: linear-gradient(90deg, #e454aa, #9651c7, #c454b6, #6d4cd7, #c454b6, #9651c7, #e454aa);
        animation: gradientBackgroundAnimation 72s linear infinite;
        background-size: 1200% 400%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 25px;
        outline: none;
        color: #fff;
        font-size: 1.25rem;
        cursor: pointer;
      }
    }
  }
`

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <div className="logo">
          <img src="/logo.svg" alt="logo" width="240" height="60" />
        </div>
        <div className="right-section">
          <div className="nav-item faqs">
            FAQs <sup> ↗</sup>
          </div>
          <div className="nav-item about">
            About NFTs
            <sup> ↗</sup>
          </div>
          <div className="nav-item discord">
            <img src="/imgs/discord.png" alt="discord" />
          </div>
          <div className="nav-item feedback">
            <button>
              Join the Movement
            </button> 
          </div>
        </div>
      </HeaderWrapper>
    </Container>
  )
}

export { Header }
