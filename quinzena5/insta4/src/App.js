import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Anderson from './img/anderson.jpg';
import Andre from './img/andre.jpeg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'André'}
          fotoUsuario={'https://github.com/AndreLuizGomesPereira.png'}
          fotoPost={Andre}
        />

        <Post
          nomeUsuario={'Anderson'}
          fotoUsuario={'https://github.com/andersonheidrich.png'}
          fotoPost={Anderson}
        />
      </MainContainer>
    );
  }
}

export default App;
