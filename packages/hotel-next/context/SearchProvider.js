import React, { useReducer } from 'react';

export const SearchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const SearchProvider = ({ children, query }) => {
  const [state, dispatch] = useReducer(reducer, query);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
