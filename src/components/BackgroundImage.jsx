import styled from 'styled-components';

import background from '../assets/login.jpg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

const BackgroundImage = () => {
  return (
    <Container>
      <img src={background} alt='Background' />
    </Container>
  );
};

export default BackgroundImage;
