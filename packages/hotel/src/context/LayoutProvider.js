import React, { createContext, useContext, useReducer } from 'react';
export const LayoutContext = createContext();

const initialState = {
  searchVisibility: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_TOP_SEARCHBAR':
      return {
        ...state,
        searchVisibility: true,
      };
    case 'HIDE_TOP_SEARCHBAR':
      return {
        ...state,
        searchVisibility: false,
      };
    default:
      return state;
  }
}

export default function LayoutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LayoutContext.Provider value={[state, dispatch]}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useStateValue = () => useContext(LayoutContext);
