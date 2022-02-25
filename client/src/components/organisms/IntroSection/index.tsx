import React from 'react'
import styled from 'styled-components'
import { IntroCard } from '../../molecules'

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
`

const IntroSection = () => {
  return (
    <Container>
      <IntroCard title={'Get in touch with us'}>
        <a className="intro-links">
          <img src="/icons/discord.png" alt="discord" />
        </a>
        <a className="intro-links">
          <img src="/icons/instagram.png" alt="instagram" />
        </a>
        <a className="intro-links">
          <img src="/icons/tiktok.png" alt="tiktok" />
        </a>
        <a className="intro-links">
          <img src="/icons/twitter.png" alt="twitter" />
        </a>
      </IntroCard>
      <IntroCard
        title={
          <>
            Built on{' '}
            <span className="solana-sup">
              Solana<sup> ↗</sup>
            </span>
          </>
        }
      >
        <img className="solana" src="/imgs/solana.png" alt="solana" />
      </IntroCard>
    </Container>
  )
}

export { IntroSection }
