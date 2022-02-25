import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 50px 40px;
  border-radius: 10px;
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
  text-align: center;
    h4 {
      font-size: 1.65rem;
      font-weight: 400;
      color: #555760;
      & .solana-sup {
        color: rgb(15, 83, 186);
      }
    }
    & .content {
      margin-top: 30px;
      & .intro-links{
        padding: 0 10px;
        & img {
          width: 85px;
          height: 85px;
        }
      }
      & .solana {
        width: 400px;
        height: 85px;
      }
    }
  }
`

const IntroCard = ({ title, children }) => {
  return (
    <CardWrapper>
      <h4>{title}</h4>
      <div className="content">
        {children}
      </div>
    </CardWrapper>
  )
}

export { IntroCard }