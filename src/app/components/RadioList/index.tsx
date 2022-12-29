import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { FlexBox } from '../FlexBox';
import { Radio } from '../Radio';

interface IRadioList {
  list: (number | string)[]; // 라디오 버튼의 값 리스트
  onClick?: (value: string | number) => void;
  curValue?: number | string; // 현재 선택된 값
  unitText?: string; // 라디오 버튼 값의 단위 ex)점
  label?: string; // 라디오 버튼 리스트 왼쪽에 표시될 텍스트
  color?: string; // 라디오 버튼의 색상
  hideText?: boolean; // 라디오 버튼 값의 표시 여부
}

export function RadioList({
  list,
  onClick,
  curValue,
  unitText,
  label,
  color,
  hideText = false,
}: IRadioList) {
  const [checkValue, setCheckValue] = React.useState<string | number>(
    curValue ?? 0,
  );
  const onChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value: value } = e.target;
    if (checked) setCheckValue(isNaN(+value) ? value : +value);
  };

  const onClickFn = () => {
    onClick && onClick(checkValue);
  };

  return (
    <Container justifyContent="flex-start">
      {label && <Label>{label}</Label>}
      {list.map(item => (
        <Radio
          key={`check_box_list_item_${item}_${unitText}`}
          color={color}
          value={item}
          checked={checkValue === item}
          name="radioList"
          onChange={onChangeItem}
          {...(!hideText && { text: `${item}${unitText ? unitText : ''}` })}
        />
      ))}
      <Button
        text="적용하기"
        onClick={onClickFn}
        style={{
          width: 86,
          height: 30,
          marginLeft: 24,
          fontSize: 16,
          ...(color && { backgroundColor: color }),
        }}
      />
    </Container>
  );
}

const Container = styled(FlexBox)`
  & > label + label {
    margin-left: 16px;
  }
`;

const Label = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;

  color: ${({ theme }) => theme.blue100};

  margin-right: 24px;
`;
