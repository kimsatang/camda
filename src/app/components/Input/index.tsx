import * as React from "react";
import { FieldWrapper, InputWrapper, InputElement } from "./styles";
import { InputSize } from "../../../types/UIType";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: InputSize;
  label?: string;
  placeholder?: string;
  isLabel?: boolean;
  icon?: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const { placeholder, label, inputSize, icon, style, ...inputProps } = props;

    return (
      <FieldWrapper>
        {label && <label>{label}</label>}
        <InputWrapper isLabel={Boolean(label)} inputSize={inputSize}>
          {icon && <img src={icon} alt="label" />}
          <InputElement
            placeholder={placeholder}
            inputSize={inputSize}
            icon={icon}
            ref={ref}
            style={{ ...style }}
            {...inputProps}
          />
        </InputWrapper>
      </FieldWrapper>
    );
  }
);
