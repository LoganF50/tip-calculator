import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { themes } from "./styles/themes";
import { Header } from "./components/Header";
import { TipCalculator } from "./components/TipCalculator";

const StyledApp = styled.div`
  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.cyan200};
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={themes.frontendMentor}>
        <GlobalStyle />
        <StyledApp>
          <Header>
            <img src="/images/logo.svg" alt="Splitter" />
          </Header>
          <TipCalculator />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
