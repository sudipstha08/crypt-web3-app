import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: rgb(118 118 145 / 20%) 0 7px 29px 0;
  padding: 100px 50px;
  & .info {
    font-size: 27px;
    line-height: 40px;
  }
  & .title {
    font-weight: 48px;
    font-family: "ITC Avant Garde Gothic Pro";
  }
  & .desp {
    margin-top: 20px;
    color: #555760;
    font-size: 1.3rem;
    line-height: 2.3rem;
  }
`

const ContentCard = ({ info, title, desp }) => {
  return (
    <Container>
      <div className="info">{info}</div>
      <div className="title">{title}</div>
      <div className="desp">{desp}</div>
    </Container>
  )
}

export { ContentCard }