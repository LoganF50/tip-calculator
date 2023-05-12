import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({ type: "text" })`
  background-color: ${({ theme }) => theme.color.cyan100};
  color: ${({ theme }) => theme.color.cyan500};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-size: ${({ theme }) => theme.fontSize.base600};
  padding: ${({ theme }) =>
    theme.spacing.base200 + " " + theme.spacing.base400};
  min-width: 0; /* inputs come with a min-width > 0 so need to set at 0 then set width to 100% so it'll shrink as expected */
  width: 100%;
  text-align: right;
  border: 2px solid ${({ theme }) => theme.color.cyan100};

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
  font-size: ${({ theme }) => theme.fontSize.base300};
  padding-bottom: ${({ theme }) => theme.spacing.base400};

  span {
    color: ${({ theme }) => theme.color.error};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.color.cyan400};
`;

const Container = styled.div`
  position: relative;

  img {
    position: absolute;
    left: ${({ theme }) => theme.spacing.base500};
    top: 50%;
    transform: translate(0px, -50%);
  }
`;

type NumberInputProps = {
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder: string;
  value: number | string;
};

type LabeledNumberInputProps = NumberInputProps & {
  error: string;
  imgSrc: string;
  label: string;
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
  imgSrc,
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
      <Container>
        <Input
          id={id}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
        <img src={imgSrc} alt="" />
      </Container>
    </div>
  );
};
