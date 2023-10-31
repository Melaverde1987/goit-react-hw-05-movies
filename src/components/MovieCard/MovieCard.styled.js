import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${p => p.theme.colors.white};
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  gap: 40px;

  .box-title {
    margin-bottom: 2px;
  }

  .text-box {
    padding: 30px 0;
  }
`;
