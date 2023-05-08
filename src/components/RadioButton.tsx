import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base500};
`;

const Label = styled.label`
  background-color: ${({ theme }) => theme.color.cyan500};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.base600};
  padding: ${({ theme }) =>
    theme.spacing.base400 + " " + theme.spacing.base200};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonActive};
    color: ${({ theme }) => theme.color.cyan500};
  }
`;

const Input = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;

  &:checked + ${Label} {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.cyan500};
  }
`;

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  id: string;
  label: string;
  name: string;
  value: string;
};

export const RadioButton: React.FC<Props> = ({
  onChange,
  checked,
  id,
  label,
  name,
  value,
}: Props) => {
  return (
    <Wrapper>
      <Input
        onChange={onChange}
        checked={checked}
        id={id}
        name={name}
        value={value}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};
