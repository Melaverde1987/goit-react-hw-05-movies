import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  background-color: ${p => p.theme.colors.white};
  max-width: 320px;

  .text-box {
    padding: 30px 20px;

    h3 {
      color: ${p => p.theme.colors.black};
      margin-bottom: 0;
    }
  }
`;
