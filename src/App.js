import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import ShowAlgorithmApp from "./containers/ShowAlgorithmApp";

import Theme from "./components/GlobalStyles/Theme";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <ShowAlgorithmApp />
        </ThemeProvider>
    );
}

export default App;
