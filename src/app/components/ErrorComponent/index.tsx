import * as React from 'react';
import styled from 'styled-components';

interface IError {
  errorMessage?: string;
}

const ErrorComponent = ({ errorMessage }: IError) => {
  return <ErrorSpan>{errorMessage}</ErrorSpan>;
};

export default ErrorComponent;

const ErrorSpan = styled.span`
  color: red;
  font-size: 17px;
  margin-top: 12px;
`;
