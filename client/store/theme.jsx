// theme switching using Context API and styled componenents
// https://jscircle.com/react-theme-switching-with-context-api-and-styled-components/

import { createContext, useReducer } from 'react';
export const ThemeContext = createContext();

const INITIAL_STATE = { theme2: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { theme2: !state.theme2 };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
};
