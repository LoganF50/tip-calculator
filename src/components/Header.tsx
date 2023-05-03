import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: ${({ theme }) => theme.fontSize.base1000};
  padding: ${({ theme }) => theme.spacing.base1000};
`;

type Props = {
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};
