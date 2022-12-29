import styled, { keyframes } from 'styled-components';
import * as React from 'react';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ background?: string; width?: number }>`
  position: relative;
  margin-left: 12px;
  width: ${({ width }) => (width ? `${width}px` : '26px')};
  height: ${({ width }) => (width ? `${width}px` : '26px')};
  border-radius: 50%;
  display: inline-block;
  background: conic-gradient(
    ${({ theme, background }) => (background ? background : theme.blue100)} 0%,
    white 100%
  );
  animation: ${rotate} 1s linear infinite;
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 20px;
    height: 20px;
    width: ${({ width }) => (width ? `${width - 6}px` : '20px')};
    height: ${({ width }) => (width ? `${width - 6}px` : '20px')};
    border-radius: 50%;
    background: ${({ theme, background }) =>
      background ? background : theme.gray010};
  }
`;
