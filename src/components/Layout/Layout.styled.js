import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(4)};
  max-width: 1360px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: ${p => p.theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  a {
    color: ${p => p.theme.colors.white};
  }
`;

export const HeaderTop = styled.div`
  color: ${p => p.theme.colors.black};

  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p {
      font-size: 22px;
      margin-bottom: 0;
      color: ${p => p.theme.colors.white};
    }
  }

  svg {
    fill: ${p => p.theme.colors.white};
    width: 25px;
    height: 25px;
  }
`;
