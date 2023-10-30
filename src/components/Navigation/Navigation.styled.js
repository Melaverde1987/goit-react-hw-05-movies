import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 18px;

  &.active {
    color: ${p => p.theme.colors.primaryColor};
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
