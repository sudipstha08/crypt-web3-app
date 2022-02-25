import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 20px;
  min-height: 800px;
  & > div {
    position: relative;
  }
  & video {
    right: 0;
    top: 0;
    border-radius: 18px;
    position: absolute;
  }
  & .video-overlay {
    right: 0;
    top: 0;
    bottom: 0;
    width: 920px;
    height: 813px;
    position: absolute;
    background-color: #b92587;
    opacity: 0.6;
    border-radius: 18px;
  }
`

const CoverSection = () => {
  return (
    <Container>
      <div>
        <video width="920" autoPlay muted playsInline loop>
          <source src="https://momentonft.com/img/cover.mp4" />
        </video>
        <div className="video-overlay" />
      </div>
    </Container>
  )
}

export { CoverSection }
