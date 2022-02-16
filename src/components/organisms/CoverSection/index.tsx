import React from 'react'
import styled from "styled-components"

const Container = styled.div``

const CoverSection = () => {
  return (
    <Container>
      <video width="920" autoPlay muted playsInline loop>
        <source src="https://momentonft.com/img/cover.mp4" />
      </video>
    </Container>
  )
}

export { CoverSection }