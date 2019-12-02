import React from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import { Footer, Sidebar } from '@iso/components/Algolia/Algolia';
import EmptyComponent from '@iso/components/EmptyComponent';
import Content from './Content';
import AlgoliaSearchConfig from '@iso/config/algolia.config';
import { setUrl, getInitData } from '@iso/lib/helpers/url_sync';
import './InstantSearch.css';
import AlgoliaSearchPageWrapper from './Algolia.styles';

export default function(props) {
  const [searchState, setSearchState] = React.useState(getInitData());

  const setVoice = query => {
    setSearchState({
      ...searchState,
      page: '1',
      query,
    });
    setUrl(searchState);
  };
  const searchInfo = {
    ...AlgoliaSearchConfig,
    indexName: 'default_search',
    searchState: searchState,
    urlSync: true,
    onSearchStateChange: searchState => {
      setSearchState(searchState);
      setUrl(searchState);
    },
  };
  return (
    <AlgoliaSearchPageWrapper className="isoAlgoliaSearchPage">
      {AlgoliaSearchConfig.appId ? (
        <InstantSearch {...searchInfo}>
          <div className="isoAlgoliaMainWrapper">
            <Sidebar setVoice={setVoice} />
            <Content {...props} />
          </div>
          <Footer />
        </InstantSearch>
      ) : (
        <EmptyComponent value="Please include algolia appId" />
      )}
    </AlgoliaSearchPageWrapper>
  );
}
