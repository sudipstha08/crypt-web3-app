import React from 'react'
import styled from 'styled-components'
import { ContentCard } from '../../../molecules'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 63% auto;
  grid-gap: 20px;
  padding-top: 150px;
  padding-bottom: 100px;
  position: relative;
  & .image-wrapper {
    position: sticky;
    top: 20px;
    bottom: 20px;
    border: 10px solid #000;
    border-radius: 26px;
    height: 525px;
    width: 300px;
    margin: auto;
    overflow: hidden;
  }
  & .each-card:first-child {
    margin-bottom: 200px;
  }
`

const ContentSection = () => {
  return (
    <Container>
      <div className="card-wrapper">
        <ContentCard
          info={'Content as an'}
          title="Asset Class"
          desp={
            'We allow content creators to frictionlessly turn their content into NFTs on the blockchain.'
          }
        />
        <ContentCard
          info={'Candid moments that have'}
          title="Immediate value"
          desp={
            "Track your favorite celebrities, influencers and tastemakers. Don't miss out on a new viral trend ever again."
          }
        />
      </div>
      <div className="image-wrapper">
        <div className="image">
          <img src="/imgs/content.png" alt="" width="300" height="auto" />
        </div>
      </div>
    </Container>
  )
}

export { ContentSection }
