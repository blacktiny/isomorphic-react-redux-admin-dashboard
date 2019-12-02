import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import GlobalStyles from '@iso/assets/styles/globalStyle';
import AppRoutes from './AppRoutes';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});
function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <GlobalStyles />
        <AppRoutes />
      </>
    </ApolloProvider>
  );
}

export default App;
