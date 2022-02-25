import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 200px;
  & .contents {
    flex: 52%;
    & .title {
      font-family: 'Oswald', sans-serif;
      font-size: 40px;
      font-weight: 600;
    }
    & .desp {
      color: #555760;
      font-size: 1rem;
      line-height: 2rem;
      margin-top: 40px;
    }
    & .seperator {
      height: 1px;
      margin: 20px 0;
      background: #555760;
      opacity: 0.1;
      margin-right: 90px;
    }
    & .info {
      margin-top: 20px;
      font-weight: bold;
      font-size: 1.1rem;
      line-height: 2.1rem;
    }
  }
  & .img-wrapper {
    flex: 48%;
    & img {
      max-width: 100%;
    }
  }
`

const ManageSection = () => {
  return (
    <Container>
      <div className="contents">
        <div className="title">
          Easily Manage Your Content <br /> No Matter Where It Is
        </div>
        <div className="desp">
          Set lifetime royalties with our SMART contracts and track your
          content.
          <br />
          We will show you what it sells for and who owns it long after you’ve
          <br /> made it.
        </div>
        <div className="seperator"></div>
        <div className="info">
          Join our Creator Fund for exclusive tools and features that will
          supercharge your brand.
        </div>
      </div>
      <div className="img-wrapper">
        <img src="/imgs/graph.png" alt="graph" />
      </div>
    </Container>
  )
}

export { ManageSection }
