import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({ type: "number" })`
  background-color: ${({ theme }) => theme.color.cyan100};
  color: ${({ theme }) => theme.color.cyan500};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-size: ${({ theme }) => theme.fontSize.base500};
  padding: ${({ theme }) =>
    theme.spacing.base200 + " " + theme.spacing.base400};
  min-width: 0; /* inputs come with a min-width > 0 so need to set at 0 then set width to 100% so it'll shrink as expected */
  width: 100%;
  text-align: right;
  border: 2px solid ${({ theme }) => theme.color.cyan100};

  // remove number arrows (firefox)
  appearance: textfield;
  -moz-appearance: textfield;

  // remove number arrows (chrome, safari, edge, opera)
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover,
  :focus {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.color.primary};
    outline: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.color.error};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.color.cyan400};
`;

type NumberInputProps = {
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  value: string;
};

type LabeledNumberInputProps = NumberInputProps & {
  label: string;
  error: string;
};

export const NumberInput: React.FC<NumberInputProps> = ({
  onBlur,
  onChange,
  id,
  placeholder,
  value,
}: NumberInputProps) => {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export const LabeledNumberInput: React.FC<LabeledNumberInputProps> = ({
  onBlur,
  onChange,
  error,
  id,
  label,
  placeholder,
  value,
}: LabeledNumberInputProps) => {
  return (
    <div>
      <Row>
        <Label htmlFor={id}>{label}</Label>
        <span>{error}</span>
      </Row>
      <Input
        id={id}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
};
