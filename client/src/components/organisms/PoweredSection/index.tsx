import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 150px;
  justify-content: space-between;
  align-items: center;
  & .img-wrapper {
    flex: 48%;
    padding: 30px;
    & img {
      max-width: 100%;
    }
  }
  & .contents {
    flex: 52%;
    padding-left: 80px;
    & .info {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
    & .title {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      line-height: 4rem;
      margin-top: 15px;
    }
    & .desp {
      color: #555760;
      font-size: 1rem;
      line-height: 1.9rem;
      margin-top: 30px;
    }
    & .buttons-wrapper {
      display: flex;
      margin-top: 35px;
      & .btn {
        border: none;
        background: none;
        &:first-child {
          margin-right: 14px;
        }
        & img {
          width: 180px;
          height: 60px;
        }
      }
    }
  }
`

const PoweredSection = () => {
  return (
    <Container>
      <div className="img-wrapper">
        <img src="/imgs/download.png" alt="download" />
      </div>
      <div className="contents">
        <div className="info">Get Our App on iOS & Android</div>
        <div className="title">
          Powered by NFTs on the <br /> Blockchain
        </div>
        <div className="desp">
          A contrarian bet on social media where you own your entire <br />{' '}
          online presence.
        </div>
        <div className="buttons-wrapper">
          <button className="btn">
            <img src="/icons/apple-store.png" alt="apple store" />
          </button>
          <button className="btn">
            <img src="/icons/google-play.png" alt="google play" />
          </button>
        </div>
      </div>
    </Container>
  )
}

export { PoweredSection }
