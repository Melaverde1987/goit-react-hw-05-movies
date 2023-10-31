import styled from 'styled-components';

export const CastCard = styled.ul`
  background-color: ${p => p.theme.colors.white};
  padding-top: 30px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  li {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

export const Error = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding: 10px 30px;
`;
