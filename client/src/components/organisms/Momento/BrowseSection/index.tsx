import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .image-wrapper {
    flex: 35%;
    padding-left: 30px;
    & img {
      max-width: 100%;
    }
  }
  & .contents {
    flex: 50%;
    padding-left: 10%;
    & .title {
      font-family: 'Oswald', sans-serif;
      font-size: 2.4rem;
      font-weight: 600;
    }
    & .desp {
      color: #555760;
      font-size: 1.1rem;
      line-height: 2.1rem;
      margin-top: 40px;
    }
  }
`

const BrowseSection = () => {
  return (
    <Container>
      <div className="image-wrapper">
        <img src="/imgs/browse.png" alt="browse" />
      </div>
      <div className="contents">
        <div className="title">
          Browse, Search & Purchase <br /> Videos You Are Interested In
        </div>
        <div className="desp">
          Browse content from our creative users and purchase the ones you{' '}
          <br />
          love.
        </div>
      </div>
    </Container>
  )
}

export { BrowseSection }
