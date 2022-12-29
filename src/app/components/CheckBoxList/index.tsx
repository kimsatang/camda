import * as React from 'react';
import styled from 'styled-components';
import { CheckBox } from '../CheckBox';
import { FlexBox } from '../FlexBox';

interface ICheckBoxList {
  list: (number | string)[]; // 체크박스의 값 리스트
  value: string[]; // 선택된 값 리스트
  onChange: (value: string[]) => void;
  unitText?: string; // 체크박스 값의 단위 ex)점
  label?: string; // 체크박스 리스트 왼쪽에 표시될 텍스트
  color?: string; // 체크박스의 색상
  hideText?: boolean; // 체크박스 값의 표시 여부
  disabled?: boolean;
}

export function CheckBoxList({
  list,
  value,
  onChange,
  unitText,
  label,
  color,
  hideText = false,
  disabled,
}: ICheckBoxList) {
  const onChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value: tValue } = e.target;
    let list = value;
    if (checked) {
      list = [...list, tValue];
    } else {
      list = list.filter(i => i !== tValue);
    }
    onChange(list);
  };

  return (
    <Container justifyContent="flex-start">
      {label && <Label>{label}</Label>}
      {list.map(item => (
        <CheckBox
          key={`check_box_list_item_${item}_${unitText}`}
          color={color}
          value={item}
          checked={value.includes(item + '')}
          onChange={onChangeItem}
          disabled={disabled}
          {...(!hideText && { text: `${item}${unitText ? unitText : ''}` })}
        />
      ))}
    </Container>
  );
}

const Container = styled(FlexBox)`
  & > label + label {
    margin-left: 14px;
  }
`;

const Label = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;

  color: ${({ theme }) => theme.blue100};

  margin-right: 16px;
`;
