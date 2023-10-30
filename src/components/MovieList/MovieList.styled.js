import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  flex-basis: calc(33.33% - 15px);
  background-color: white;
`;
