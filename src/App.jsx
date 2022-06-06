import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";

import NavBar from "./components/layout/global/NavBar";

const lightTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#ED7839",
    tertiary: "#FDF1EB",
    background: "#FFFFFF",
  },
  text: {
    white: "#FFFFFF",
    title: "#ED7839",
    subtitle: "#725C5C",
    primary: "#4E4E4E",
    secondary: "#5C5C5C",
    tertiary: "#4D4D4D",
  },
};

const darkTheme = {
  colors: {
    primary: "#011627",
    secondary: "#ED7839",
    tertiary: "#FDF1EB",
    background: "#011627",
  },
  text: {
    white: "#FFFFFF",
    title: "#ED7839",
    subtitle: "#725C5C",
    primary: "#B1B1B1",
    secondary: "#A3A3A3",
    tertiary: "#B2B2B2",
  },
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <NavBar onClick={themeToggler} />
      </>
    </ThemeProvider>
  );
};

export default App;
