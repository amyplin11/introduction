import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 15px 15px;
  padding: 0 1rem;
`

interface IColorBlock {
    readonly color: string
}
const ColorBlock = styled.div`
    height: 200px;
    background-color: ${(props: IColorBlock) => props.color};
`

function lighten(color: string, luminosity: number): string {
	// validate hex string
	color = new String(color).replace(/[^0-9a-f]/gi, '');
	if (color.length < 6) {
		color = color[0]+ color[0]+ color[1]+ color[1]+ color[2]+ color[2];
	}
	luminosity = luminosity || 0;

	// convert to decimal and change luminosity
	var newColor = "#", c, i, black = 0, white = 255;
	for (i = 0; i < 3; i++) {
		c = parseInt(color.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
		newColor += ("00"+c).substr(c.length);
	}
	return newColor; 
}
 

const getColorBlocks = (): any[] => {
    let previousColor = "6699CC"
    const colorBlocks = []
    while (previousColor !== '#ffffff') {
        const newColor = lighten(previousColor, 0.01);
        previousColor = newColor
        colorBlocks.push(<ColorBlock color={newColor} key={newColor}/>)
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

