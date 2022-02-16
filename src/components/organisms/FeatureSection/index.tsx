import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
    padding: 50px 20px 80px 20px;
    box-shadow: rgb(118 118 145 / 20%) 0 7px 29px 0;
    margin-top: 70px;
    text-align: center;
    padding: 50px 60px;
    & h6 {
      font-size: 1.75em;
      line-height: 2.5rem;
      font-weight: 400;
    }
    & .img-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      & img {
        width: 200px;
        height: 80px;
        transition: all .5s;
        filter: grayscale(100%);
        &:hover {
          filter: none;
        }
      }
    }
`

const FeatureSection = () => {
  return (
    <Container>
       <h6 className="title">Featured on</h6>
       <div className="img-wrapper">
          <div className="img">
            <img src="/icons/forbes.png" alt="forbes" />
          </div>
          <div className="img">
            <img src="/icons/thriveglobal.png" alt="thrive global" />
          </div>
          <div className="img">
            <img src="/icons/yahoo.png" alt="yahoo finance" />
          </div>
          <div className="img">
            <img src="/icons/marketwatch.png" alt="market watch" />
          </div>
         </div>
    </Container>
  )
}

export { FeatureSection }