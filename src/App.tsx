import Router from "./pages";
import GlobalStyles from "./assets/global.styled";
import { ThemeProvider } from "styled-components";

const theme = {

}

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}
