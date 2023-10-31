import { Container, Header, HeaderTop } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { GiPopcorn } from 'react-icons/gi';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header>
        <HeaderTop>
          <Container>
            <div className="logoContainer">
              <GiPopcorn />
              <p>Best movie finder ever</p>
            </div>
          </Container>
        </HeaderTop>

        <Container>
          <Navigation />
        </Container>
      </Header>

      <Container>
        <Suspense fallback={'LOADING PAGE...'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
