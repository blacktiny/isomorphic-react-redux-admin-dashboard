import React from 'react';
import { createConnector } from 'react-instantsearch';
import ContentElement from './ContentElement';
import EmptyComponent from '@iso/components/EmptyComponent';
import { LoaderElement } from '@iso/components/Algolia/AlgoliaComponent.style';

const CustomResults = createConnector({
  displayName: 'CustomResults',
  getProvidedProps(props, searchState, searchResults) {
    const status = searchResults.results
      ? searchResults.results.nbHits === 0
      : 'loading';
    return { query: searchState.query, status, props };
  },
})(({ status, query, ...props }) => {
  if (status === 'loading') {
    return (
      <LoaderElement className="isoContentLoader">
        <div className="loaderElement" />
      </LoaderElement>
    );
  } else if (status) {
    return <EmptyComponent value="No results for these filtering" />;
  } else {
    return <ContentElement {...props} />;
  }
});

export default CustomResults;
