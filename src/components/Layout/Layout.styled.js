import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(6)};
  padding: ${p => p.theme.spacing(4)};
  max-width: 1500px;
  margin: 0 auto;
`;
