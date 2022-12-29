import * as React from "react";
import { FlexBox } from "../FlexBox";
import styled from "styled-components";
import { ReactComponent as Check } from "./assets/check.svg";

interface ICheckBox extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string; // 체크박스 옆에 표시될 텍스트
  color?: string; // 체크박스 안의 체크 아이콘 색상
}

export const CheckBox = React.forwardRef<HTMLInputElement, ICheckBox>(
  ({ text, color, ...rest }, ref) => {
    return (
      <Container>
        <Input type="checkbox" color={color} {...rest} ref={ref} />
        <GrayBox>
          <Check />
        </GrayBox>
        {text && <Text>{text}</Text>}
      </Container>
    );
  }
);

const Container = styled(FlexBox).attrs({ as: "label" })`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  &:checked + div > svg > path {
    stroke: ${({ color, theme }) => (color ? color : theme.blue100)};
  }
`;

const GrayBox = styled(FlexBox)`
  width: 18px;
  height: 18px;
  border-radius: 4px;

  background: ${({ theme }) => theme.gray020};
`;

const Text = styled.span`
  margin-left: 8px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 160%;

  color: ${({ theme }) => theme.gray070};
`;
