import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";

import { Container } from "./components/styles/layout/global/App.styled";
import NavBar from "./components/layout/global/NavBar";
import Header from "./components/layout/global/Header";
import Home from "./components/layout/home/Home";
import Footer from "./components/layout/global/Footer";

const lightTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#ED7839",
    tertiary: "#FDF1EB",
    background: "#FFFFFF",
    backgroundMain: "#E5E5E5",
    switch: "#011627",
    shadow: "rgba(0, 0, 0, 0.25)",
  },
  text: {
    white: "#FFFFFF",
    title: "#ED7839",
    subtitle: "#725C5C",
    primary: "#4E4E4E",
    secondary: "#5C5C5C",
    tertiary: "#4D4D4D",
    shadow: "rgba(78, 78, 78, 0.25)",
  },
};

const darkTheme = {
  colors: {
    primary: "#011627",
    secondary: "#ED7839",
    tertiary: "#FDF1EB",
    background: "#011627",
    backgroundMain: "#081C2C",
    switch: "#FFFFFF",
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
      <Container>
        <GlobalStyles />
        <NavBar onClick={themeToggler} />
        <Header />
        <Home />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
