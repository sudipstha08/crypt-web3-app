import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const HeaderWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  & .logo {
    width: 240px;
    height: 60px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <div className="logo">
          <img src="/imgs/logo.svg" alt="logo" />
        </div>
        <div className="right-section">
          <div className="faqs">
            FAQs <sup> ↗</sup>
          </div>
          <div className="about">
            About NFTs
            <sup> ↗</sup>
          </div>
          <div className="discord">
            <img src="/imgs/discord.png" alt="discord" />
          </div>
          <div className="feedback">Join the Movement</div>
        </div>
      </HeaderWrapper>
    </Container>
  )
}

export { Header }
