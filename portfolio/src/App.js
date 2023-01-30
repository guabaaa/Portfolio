import logo from "./logo.svg";
import "./App.css";
import RoutesPage from "./RoutesPage";
import { ThemeProvider } from "styled-components";
import theme from "./assets/style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesPage />
    </ThemeProvider>
  );
}

export default App;
