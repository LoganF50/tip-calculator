import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.cyan500};
  border-radius: ${({ theme }) => theme.borderRadius.container};
  padding: ${({ theme }) => theme.spacing.base600};
  padding-top: ${({ theme }) => theme.spacing.base900};
  gap: ${({ theme }) => theme.spacing.base800};
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.base300};
`;

const SubHeader = styled.div`
  color: ${({ theme }) => theme.color.cyan300};
  font-size: ${({ theme }) => theme.fontSize.base200};
`;

const Amount = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base700};
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.cyan500};
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-size: ${({ theme }) => theme.fontSize.base500};
  padding: ${({ theme }) =>
    theme.spacing.base400 + " " + theme.spacing.base200};
  cursor: pointer;

  &:disabled {
    opacity: 0.25;
  }
`;

type Props = {
  disabled: boolean;
  tip: string;
  total: string;
  onReset: () => void;
};

export const TipOutput: React.FC<Props> = ({
  disabled,
  tip,
  total,
  onReset,
}: Props) => {
  return (
    <>
      <Wrapper>
        <FlexRow>
          <FlexColumn>
            <Header>Tip Amount</Header>
            <SubHeader>/ person</SubHeader>
          </FlexColumn>
          <Amount>{tip}</Amount>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Header>Total</Header>
            <SubHeader>/ person</SubHeader>
          </FlexColumn>
          <Amount>{total}</Amount>
        </FlexRow>
        <StyledButton disabled={disabled} onClick={onReset}>
          reset
        </StyledButton>
      </Wrapper>
    </>
  );
};
