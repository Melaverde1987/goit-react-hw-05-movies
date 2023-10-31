import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const SearchForm = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;

  .search-item {
    text-align: center;
    width: 100%;
    display: flex;
    gap: 10px;
  }

  input {
    width: 100%;
    max-width: 400px;

    &:focus {
      border: 1px solid ${p => p.theme.colors.primaryColor};
      outline: none;
    }
  }

  button {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${p => p.theme.colors.primaryColor};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.black};
    padding: 5px 10px;
    border-radius: 5px;
    transition: color ${p => p.theme.cubicTransition},
      background-color ${p => p.theme.cubicTransition};

    &:hover {
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.primaryColor};
    }
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -1.5em;
  color: red;
  font-size: 14px;
`;
