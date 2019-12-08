import React, {useState} from 'react';
import styled from 'styled-components'
import { ContentGrid } from '../content-grid'

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props: {isSidebarOpen: boolean}) => props.isSidebarOpen ? '300px auto' : '80px auto'};
  grid-template-rows: 100px auto;
  grid-template-areas:
  "sidebar header"
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
  background-color: #E6E6FA
  width: ${(props: {isSidebarOpen: boolean}) => props.isSidebarOpen ? '300px' : '80px'};
  align-items: center;
`
const Content = styled.div`
  display: flex;
  grid-area: content
  justify-content: center;
  align-items: center;
`

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      <Header>Header</Header>
      <Sidebar isSidebarOpen={isSidebarOpen}>Sidebar
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Toggle</button>
      </Sidebar>
      <Content>
        <ContentGrid/>
      </Content>
    </Container>
  );
}

