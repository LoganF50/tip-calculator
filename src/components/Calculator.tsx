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
  flex: 1 1 auto;
  gap: ${({ theme }) => theme.spacing.base700};
  padding: ${({ theme }) => theme.spacing.base800};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    border-radius: ${({ theme }) => theme.borderRadius.container};
    max-width: 900px;
    flex-direction: row;
    flex: 0 1 auto;
  }
`;

const TipInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.base500};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100px;
  gap: ${({ theme }) => theme.spacing.base700};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: ${({ theme }) => theme.spacing.base300};
  }
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
    percentage: 5,
    label: "5%",
    id: "tip5",
  },
  {
    selected: false,
    percentage: 10,
    label: "10%",
    id: "tip10",
  },
  {
    selected: false,
    percentage: 15,
    label: "15%",
    id: "tip15",
  },
  {
    selected: false,
    percentage: 25,
    label: "25%",
    id: "tip25",
  },
  {
    selected: false,
    percentage: 50,
    label: "50%",
    id: "tip50",
  },
];

export const Calculator: React.FC<Props> = ({}: Props) => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [billError, setBillError] = useState<string>("");
  const [customTip, setCustomTip] = useState<string>("");
  const [numPeople, setNumPeople] = useState<string>("");
  const [numPeopleError, setNumPeopleError] = useState<string>("");
  const [tips, setTips] = useState(initialTips);
  const DECIMAL_REGEX = /^\d*(\.\d{0,2})?$/; // positive dollar amounts (max 2 decimals)
  const NUMBER_REGEX = /^\d*$/; // positive integers

  const dollarFormat = (num: number) => {
    return num.toLocaleString("us-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };

  const getSelectedTip = () => {
    let selectedTip = Number(customTip);

    tips.forEach((tip) => {
      if (tip.selected) {
        selectedTip = tip.percentage;
      }
    });

    return selectedTip / 100;
  };

  const getTipPerPerson = () => {
    const tipPerPerson =
      (Number(billAmount) * getSelectedTip()) / Number(numPeople);
    if (!isFinite(tipPerPerson)) {
      return 0;
    } else {
      return tipPerPerson;
    }
  };

  const getTotalPerPerson = () => {
    const totalPerPerson =
      Number(billAmount) / Number(numPeople) + getTipPerPerson();
    if (!isFinite(totalPerPerson)) {
      return 0;
    } else {
      return totalPerPerson;
    }
  };

  const handleBillBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value === "" ? setBillError("can't be blank") : setBillError("");
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (DECIMAL_REGEX.test(e.target.value)) {
      setBillAmount(e.target.value);
    }
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (NUMBER_REGEX.test(e.target.value)) {
      setCustomTip(e.target.value);
      setTips(initialTips);
    }
  };

  const handlePeopleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value === "0"
      ? setNumPeopleError("can't be zero")
      : e.target.value === ""
      ? setNumPeopleError("can't be blank")
      : setNumPeopleError("");
  };

  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (NUMBER_REGEX.test(e.target.value)) {
      setNumPeople(e.target.value);
    }
  };

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTips = tips.map((tip) => {
      return { ...tip, selected: tip.id === e.target.id };
    });

    setTips(newTips);
    setCustomTip("");
  };

  const isResetDisabled = () => {
    let isDisabled = billAmount === "" && customTip === "" && numPeople === "";

    tips.forEach((tip) => {
      if (tip.selected) {
        isDisabled = false;
      }
    });

    return isDisabled;
  };

  const resetForm = () => {
    setBillAmount("");
    setBillError("");
    setCustomTip("");
    setNumPeople("");
    setNumPeopleError("");
    setTips(initialTips);
  };

  return (
    <Wrapper>
      <InputSection>
        <LabeledNumberInput
          onBlur={handleBillBlur}
          onChange={handleBillChange}
          error={billError}
          id="bill-amount"
          imgSrc="images/icon-dollar.svg"
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
              onChange={handleCustomTipChange}
              id="custom-tip"
              placeholder="Custom"
              value={customTip}
            />
          </TipInputs>
        </TipSection>
        <LabeledNumberInput
          onBlur={handlePeopleBlur}
          onChange={handleNumPeopleChange}
          error={numPeopleError}
          id="number-people"
          imgSrc="images/icon-person.svg"
          label="Number of People"
          placeholder="0"
          value={numPeople}
        />
      </InputSection>
      <TipOutput
        disabled={isResetDisabled()}
        tip={dollarFormat(getTipPerPerson())}
        total={dollarFormat(getTotalPerPerson())}
        onReset={resetForm}
      />
    </Wrapper>
  );
};
