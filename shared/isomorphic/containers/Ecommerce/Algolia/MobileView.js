import React from 'react';
import Button from '@iso/components/uielements/button.js';
import EmptyComponent from '@iso/components/EmptyComponent.js';
import { InstantSearch } from 'react-instantsearch/dom';
import { Footer, Sidebar } from '@iso/components/Algolia/Algolia';
import Content from './Content';
import { setUrl, getInitData } from '@iso/lib/helpers/url_sync';
import AlgoliaSearchConfig from '@iso/config/algolia.config';
import './InstantSearch.css';
import AlgoliaSearchPageWrapper from './Algolia.styles';

export default function(props) {
  const [state, setState] = React.useState({
    collapsed: true,
    searchState: getInitData(),
  });
  const setVoice = query => {
    const searchState = {
      ...state.searchState,
      page: '1',
      query,
    };
    setState({ searchState });
    setUrl(searchState);
  };
  const { collapsed } = state;
  const className = collapsed ? '' : 'sidebarOpen';
  const btnText = collapsed ? 'Filter' : 'Hide';
  const searchInfo = {
    ...AlgoliaSearchConfig,
    indexName: 'default_search',
    searchState: state.searchState,
    urlSync: true,
    onSearchStateChange: searchState => {
      setState({ searchState });
      setUrl(searchState);
    },
  };
  return (
    <AlgoliaSearchPageWrapper className={`${className} isoAlgoliaSearchPage`}>
      <Button
        className="ant-btn-primary isoAlgoliaSidebarToggle"
        onClick={() => {
          setState({ collapsed: !state.collapsed });
        }}
      >
        {btnText}
      </Button>
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
