import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 15px 15px;
  padding: 0 1rem;
`

const ColorBlock = styled.div`
    height: 200px;
    background-color: blue
`


const getColorBlocks = (): any => {
    const colorBlocks = []
    for (let x = 0; x < 50; x++) {
        colorBlocks.push(<ColorBlock/>)
    }
    return colorBlocks
}

export const ContentGrid: React.FC = () => {

const colorBlocks = getColorBlocks()

  return (
    <Container>
    {colorBlocks}
    </Container>
  );
}

