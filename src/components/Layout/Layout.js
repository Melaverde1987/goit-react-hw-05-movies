import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
      </Container>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
