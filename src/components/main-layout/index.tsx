import React from 'react';
import styled from 'styled-components'
import { ContentGrid } from '../content-grid'

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 20%) 1fr ;
  grid-template-rows: 100px auto;
  grid-template-areas:
  "header header"
  "sidebar content";
`

const Header = styled.div`
  display: flex;
  grid-area: header;
  justify-content: center;
  align-items: center;
`
const Sidebar = styled.div`
  display: flex;
  grid-area: sidebar
  justify-content: center;
  align-items: center;
  background-color: #E6E6FA
`
const Content = styled.div`
  display: flex;
  grid-area: content
  justify-content: center;
  align-items: center;
`

export const MainLayout: React.FC = () => {
  return (
    <Container>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>
        <ContentGrid/>
      </Content>
    </Container>
  );
}

