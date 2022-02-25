import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: rgb(118 118 145 / 20%) 0 7px 29px 0;
  padding: 100px 50px;
  margin: -20px 70px 100px 70px;
  border-radius: 8px;
  & .info {
    font-size: 27px;
    line-height: 40px;
  }
  & .title {
    font-weight: 48px;
    font-family: 'Oswald', sans-serif;
    font-size: 55px;
  }
  & .desp {
    margin-top: 20px;
    color: #555760;
    font-size: 1.15rem;
    line-height: 2rem;
  }
`

const ContentCard = ({ info, title, desp }) => {
  return (
    <Container className="each-card">
      <div className="info">{info}</div>
      <div className="title">{title}</div>
      <div className="desp">{desp}</div>
    </Container>
  )
}

export { ContentCard }
