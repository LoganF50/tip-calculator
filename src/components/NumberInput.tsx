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
  border: 3px solid ${({ theme }) => theme.color.cyan100};

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
    border: 3px solid ${({ theme }) => theme.color.primary};
    outline: none;
  }
`;

type Props = {
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  id: string;
  placeholder: string;
  value: string;
};

export const NumberInput: React.FC<Props> = ({
  onBlur,
  onChange,
  id,
  placeholder,
  value,
}: Props) => {
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
