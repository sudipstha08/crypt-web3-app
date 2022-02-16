import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  & .content {
    max-width: 1250px;
    margin: 0 auto;
    & .title {
      font-weight: 600;
      font-size: 55px;
      font-family: 'Oswald', sans-serif;
      line-height: 70px;
      padding: 30px 20px;
      background: #fff;
      margin: -100px 0 0 70px;
      z-index: 999;
      position: relative;
      border-radius: 5px;
      width: 500px;
      letter-spacing: 3px;
    }
    & .descriptions {
      margin-left: 87px;
      width: 50%;
      & .info {
        font-size: 1.35rem;
        color: #555760;
        padding-bottom: 13px;
       
        & span {
          color: rgb(15, 83, 186);
        }
      }
       & .seperator {
          height: 1px;
          background: #555760;
          opacity: 0.1;
      }
      & .desp1{
        margin-top: 20px;
        font-size: 1rem;
        color: #555760;
      }
      & .desp2{
        margin-top: 20px;
        font-size: 1rem;
        color: #555760;
      }
      & .desp3{
        margin-top: 14px;
        font-size: 1rem;
        color: #555760;
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
  }
`

const MainIntroSection = () => {
  return (
    <Container>
      <div className="content">
        <h1 className="title">
          Own the Moments <br /> That Matter
        </h1>
        <div className="descriptions">
          <div className="info">
            Powered by <span>NFTs <sup>↗</sup></span> on the Blockchain,
          </div>
          <div className="seperator" />
          <div className="desp1">
            We are the first NFT social network for the creator economy. Be among the first to own your favorite viral moments or create your own NFTs with ZERO fees.
          </div>
          <div className="desp2">
            We are a contrarian bet on the way social media companies own your entire online presence. We believe more intimate and valuable content will be created once you remove this centralized hierarchy of ownership.
          </div>
          <div className="desp3">
            BUY, SELL, RE-SELL, DONATE. YOU OWN IT.
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
      </div>
    </Container>
  )
}

export { MainIntroSection }