import { createContext } from "react";

const ColorContext = createContext({
  color: "#fff",
  colorWhite: () => {},
  colorBlack: () => {},
});

export default ColorContext;
