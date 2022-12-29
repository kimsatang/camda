import styled from "styled-components";

export enum StyleConstants {
  NAV_BAR_HEIGHT = "4rem",
}

export const TextBubble = styled.div`
  min-width: 160px;

  position: relative;

  padding: 6px 15px;
  background: ${({ theme }) => theme.white};

  border: 1px solid ${({ theme }) => theme.gray020};
  box-sizing: border-box;

  box-shadow: -7px 8px 16px rgba(58, 70, 93, 0.0702);
  border-radius: 4px;

  margin-left: 26px;
  &:after {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.surfacePrimary};
    content: "";
    position: absolute;
    top: 50%;
    left: -5px;
    transform: translateY(-50%) rotate(45deg);

    border-width: 0px 0px 1px 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.gray020};
  }
`;
