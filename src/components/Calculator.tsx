import { useState } from "react";
import styled from "styled-components";
import { RadioButton } from "./RadioButton";
import { NumberInput, LabeledNumberInput } from "./NumberInput";
import { TipOutput } from "./TipOutput";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.container};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.container};
  font-size: ${({ theme }) => theme.fontSize.base400};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base700};
  padding: ${({ theme }) => theme.spacing.base800};
  width: 100%;
  min-height: 100vh;
`;

const TipInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.base500};
`;

const TipSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base400};

  div {
    color: ${({ theme }) => theme.color.cyan400};
  }
`;

const Heading = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base300};
`;

type Tip = {
  id: string;
  label: string;
  selected: boolean;
  percentage: number;
};

type Props = {};

const initialTips: Tip[] = [
  {
    selected: false,
    percentage: 0.05,
    label: "5%",
    id: "tip5",
  },
  {
    selected: false,
    percentage: 0.1,
    label: "10%",
    id: "tip10",
  },
  {
    selected: false,
    percentage: 0.15,
    label: "15%",
    id: "tip15",
  },
  {
    selected: false,
    percentage: 0.25,
    label: "25%",
    id: "tip25",
  },
  {
    selected: false,
    percentage: 0.5,
    label: "50%",
    id: "tip50",
  },
];

export const Calculator: React.FC<Props> = ({}: Props) => {
  const [billAmount, setBillAmount] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tips, setTips] = useState(initialTips);

  // TODO
  const getTipPerPerson = () => {
    return "$4.27";
  };

  // TODO
  const getTotalPerPerson = () => {
    return "$32.79";
  };

  // TODO
  const handleCustomTipBlur = (e: React.FocusEvent<HTMLInputElement>) => {};

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCustomTip = e.target.value;
    setCustomTip(newCustomTip);
    if (newCustomTip !== "") {
      setTips(initialTips);
    }
  };

  // TODO
  const handleBillBlur = (e: React.FocusEvent<HTMLInputElement>) => {};

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillAmount(e.target.value);
  };

  // TODO
  const handlePeopleBlur = (e: React.FocusEvent<HTMLInputElement>) => {};

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumPeople(e.target.value);
  };

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTips = tips.map((tip) => {
      return { ...tip, selected: tip.id === e.target.id };
    });

    setCustomTip("");
    setTips(newTips);
  };

  // TODO
  const isResetDisabled = () => {
    // tips not working rest seems to work
    tips.forEach((tip) => {
      if (tip.selected) {
        return false;
      }
    });
    return billAmount === "" && customTip === "" && numPeople === "";
  };

  const resetForm = () => {
    setBillAmount("");
    setCustomTip("");
    setNumPeople("");
    setTips(initialTips);
  };

  return (
    <Wrapper>
      <LabeledNumberInput
        onBlur={handleBillBlur}
        onChange={handleBillChange}
        error="wrong input"
        id="bill-amount"
        imgSrc="/images/icon-dollar.svg"
        label="Bill"
        placeholder="0"
        value={billAmount}
      />
      <TipSection>
        <Heading>Select Tip %</Heading>
        <TipInputs>
          {tips.map((tip) => {
            return (
              <RadioButton
                key={tip.id}
                onChange={handleTipChange}
                checked={tip.selected}
                id={tip.id}
                label={tip.label}
                name={"tip"}
                value={tip.label}
              />
            );
          })}
          <NumberInput
            onBlur={handleCustomTipBlur}
            onChange={handleCustomTipChange}
            id="custom-tip"
            placeholder="Custom"
            value={customTip}
          />
        </TipInputs>
      </TipSection>
      <LabeledNumberInput
        onBlur={handlePeopleBlur}
        onChange={handlePeopleChange}
        error="wrong input"
        id="number-people"
        imgSrc="/images/icon-person.svg"
        label="Number of People"
        placeholder="0"
        value={numPeople}
      />
      <TipOutput
        disabled={isResetDisabled()}
        tip={getTipPerPerson()}
        total={getTotalPerPerson()}
        onReset={resetForm}
      />
    </Wrapper>
  );
};
