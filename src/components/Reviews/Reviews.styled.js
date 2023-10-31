import styled from 'styled-components';

export const ReviewCard = styled.ul`
  padding: 30px;
  background-color: ${p => p.theme.colors.white};

  li {
    padding-bottom: 20px;
  }
`;

export const Error = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding: 10px 30px;
`;
