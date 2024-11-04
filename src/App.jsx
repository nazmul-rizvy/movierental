import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { CartReducer, initialState } from "./reducers/CartReducer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
