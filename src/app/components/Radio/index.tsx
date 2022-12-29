import * as React from 'react';
import { FlexBox } from 'app/components/FlexBox';
import styled from 'styled-components';
import { ReactComponent as Dot } from './assets/dot.svg';

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string; // 라디오 버튼 옆에 표시될 텍스트
  color?: string; // 라디오 버튼 안의 체크 아이콘 색상
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Radio({ text, color, onChange, ...rest }: IRadio) {
  return (
    <Container>
      <Input {...rest} type="radio" onChange={onChange} color={color} />
      <GrayBox>
        <Dot />
      </GrayBox>
      {text && <Text>{text}</Text>}
    </Container>
  );
}

const Container = styled(FlexBox).attrs({ as: 'label' })`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  & + div > svg {
    display: none;
  }
  &:checked + div > svg {
    display: block;
    & > circle {
      fill: ${({ color, theme }) => (color ? color : theme.blue100)};
    }
  }
`;

const GrayBox = styled(FlexBox)`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  background: ${({ theme }) => theme.surfacePrimary};
  border: 1px solid ${({ theme }) => theme.gray030};
`;

const Text = styled.span`
  margin-left: 8px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;

  color: ${({ theme }) => theme.gray070};
`;
