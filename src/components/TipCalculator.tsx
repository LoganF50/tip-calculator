import { useState } from "react";
import styled from "styled-components";
import { RadioButton } from "./RadioButton";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.container};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.container};
  font-size: ${({ theme }) => theme.fontSize.base1000};
  padding: ${({ theme }) => theme.spacing.base100};
  width: 100%;
`;

const TipSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
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

export const TipCalculator: React.FC<Props> = ({}: Props) => {
  const [tips, setTips] = useState(initialTips);

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTips = tips.map((tip) => {
      if (tip.id === e.target.id) {
        return { ...tip, selected: true };
      } else {
        return { ...tip, selected: false };
      }
    });

    setTips(newTips);
  };

  // TODO
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Wrapper>
      <TipSection>
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
      </TipSection>
    </Wrapper>
  );
};
