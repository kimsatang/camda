import * as React from "react";
import styled, { DefaultTheme } from "styled-components";
import { theme } from "styles/theme/themes";
import { ButtonSizeType, ButtonType } from "types/UIType";

/*
Button component 
size = 'X-LARGE'
  | 'LARGE'
  | 'MEDIUM'
  | 'SMALL'
  | 'X-SMALL';
format = 'primary' | 'secondary' | 'outline';

text --> string 
추가 style added 가능

*/

const defaultProps = {
  format: "primary",
  size: "MEDIUM",
};

export type IButton = {
  text?: string;
  format?: ButtonType;
  size?: ButtonSizeType;
  children?: import("react").ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  style?: React.CSSProperties;
  icon?: string;
  disabled?: boolean;
};

// X-large meidum  large small
// primary secondary, outline

export const Button = React.memo(
  ({ icon, format, size, style, text, onClick, disabled }: IButton) => {
    //icon이 있으면
    if (icon) {
      return (
        <Container
          disabled={disabled}
          format={format}
          size={size}
          style={{ ...style }}
          onClick={onClick}
        >
          {text}
          {icon && (
            <img
              src={icon}
              alt={`text`}
              style={{ transform: "translateY(0px)" }}
            />
          )}
        </Container>
      );
    }
    // icon이 없으면
    return (
      <Container
        disabled={disabled}
        format={format}
        size={size}
        style={{ ...style }}
        onClick={onClick}
      >
        {text}
      </Container>
    );
  }
);

const Container = styled.button<{
  style?: React.CSSProperties;
  format?: ButtonType;
  size?: ButtonSizeType;
  theme?: DefaultTheme;
}>`
  border-radius: 4px;
  font-family: Noto Sans KR;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ format }) =>
    format === "primary" &&
    `
    background-color: ${theme.primaryBtn};
    color: ${theme.white};
    box-shadow: 5px 8px 20px rgba(46, 183, 255, 0.2);
    &:hover {
      background-color: ${theme.hoverPrimaryBtn}
      color: ${theme.white};
    }
  
  `}
  ${({ format }) =>
    format === "secondary" &&
    `
    background-color: ${theme.secondaryBtn};
    color: ${theme.white};
    &:hover {
      background-color: ${theme.hoverSecondaryBtn};
      color: ${theme.white};
    }
    `}
    ${({ format }) =>
    format === "outline" &&
    `
    background-color: ${theme.white};
    color: ##989FA6;
    &:hover {
      background-color: ${theme.hoverSecondaryBtn};
      color: #ffffff;
    }
    `}
  /* padding: 6px 16px; */
  /* size 별로 분기 */
  ${({ size }) =>
    size === "MEDIUM" &&
    `width: 151px; height: 36px; padding: 6 28px; font-size: 20px`}
  ${({ size }) =>
    size === "X-LARGE" &&
    `width: 173px; height: 52px; padding: 14 32px; font-size: 24px`}
  ${({ size }) =>
    size === "LARGE" &&
    `width: 224px; height: 40px; padding: 8 28px; font-size: 20px`}
  ${({ size }) =>
    size === "SMALL" &&
    `width: 101px; height: 36px; padding: 6 20px; font-size: 17px`}
  ${({ size }) =>
    size === "X-SMALL" &&
    `width: 103px; height: 28px; padding: 4 18px; font-size: 16px`}
  box-sizing: border-box;
  text-align: center;
  ${({ disabled }) =>
    disabled === true &&
    `
    background-color: #e1e5e9;
    color: #828D99;
    cursor: not-allowed;
    box-shadow: none;
  `}
  img {
    float: left;
    margin-left: 10%;
    margin-top: 1%;
  }
`;
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36320
(Button as React.ComponentType<Pick<IButton, "format" & "size">>).defaultProps =
  defaultProps;
