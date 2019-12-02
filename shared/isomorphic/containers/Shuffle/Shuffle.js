import React from 'react';
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';
import throttle from 'lodash/throttle';
import articles from './config';
import Toggle from './Toggle';
import ListItem from './ShuffleList';
import IntlMessages from '@iso/components/utility/intlMessages';
import { SortableCardWrapper } from './Shuffle.styles';

export default function() {
  const [state, setState] = React.useState({
    removedArticles: [],
    view: 'grid',
    order: 'asc',
    sortingMethod: 'chronological',
    enterLeaveAnimation: 'accordionVertical',
    articles,
  });

  function toggleList() {
    setState({
      ...state,
      view: 'list',
      enterLeaveAnimation: 'accordionVertical',
    });
  }

  function toggleGrid() {
    setState({
      ...state,
      view: 'grid',
      enterLeaveAnimation: 'accordionHorizontal',
    });
  }

  function toggleSort() {
    const sortAsc = (a, b) => a.timestamp - b.timestamp;
    const sortDesc = (a, b) => b.timestamp - a.timestamp;

    setState({
      ...state,
      order: state.order === 'asc' ? 'desc' : 'asc',
      sortingMethod: 'chronological',
      articles: state.articles.sort(state.order === 'asc' ? sortDesc : sortAsc),
    });
  }

  function sortShuffle() {
    setState({
      ...state,
      sortingMethod: 'shuffle',
      articles: shuffle(state.articles),
    });
  }

  function moveArticle(source, dest, id) {
    const sourceArticles = state[source].slice();
    let destArticles = state[dest].slice();

    if (!sourceArticles.length) return;

    // Find the index of the article clicked.
    // If no ID is provided, the index is 0
    const i = id ? sourceArticles.findIndex(article => article.id === id) : 0;

    // If the article is already removed, do nothing.
    if (i === -1) return;

    destArticles = [].concat(sourceArticles.splice(i, 1), destArticles);

    setState({
      ...state,
      [source]: sourceArticles,
      [dest]: destArticles,
    });
  }

  function sortRotate() {
    const articles = state.articles.slice();
    articles.unshift(articles.pop());

    setState({
      ...state,
      sortingMethod: 'rotate',
      articles,
    });
  }

  function renderArticles() {
    return state.articles.map((article, i) => {
      return (
        <ListItem
          key={article.id}
          view={state.view}
          index={i}
          clickHandler={throttle(
            () => moveArticle('articles', 'removedArticles', article.id),
            800
          )}
          {...article}
        />
      );
    });
  }

  return (
    <SortableCardWrapper
      id="shuffle"
      className={`isomorphicSortableCardsHolder ${state.view}`}
    >
      <header className="isoControlBar">
        <div className="isoViewBtnGroup">
          <Toggle
            clickHandler={toggleList}
            text={<IntlMessages id="toggle.list" />}
            icon="bars"
            active={state.view === 'list'}
          />
          <Toggle
            clickHandler={toggleGrid}
            text={<IntlMessages id="toggle.grid" />}
            icon="appstore"
            active={state.view === 'grid'}
          />
        </div>

        <div className="isoControlBtnGroup">
          <Toggle
            clickHandler={toggleSort}
            text={
              state.order === 'asc' ? (
                <IntlMessages id="toggle.ascending" />
              ) : (
                <IntlMessages id="toggle.descending" />
              )
            }
            icon={state.order === 'asc' ? 'up' : 'down'}
            active={state.sortingMethod === 'chronological'}
          />
          <Toggle
            clickHandler={sortShuffle}
            text={<IntlMessages id="toggle.shuffle" />}
            icon="shake"
            active={state.sortingMethod === 'shuffle'}
          />
          <Toggle
            clickHandler={sortRotate}
            text={<IntlMessages id="toggle.rotate" />}
            icon="reload"
            active={state.sortingMethod === 'rotate'}
          />
        </div>
      </header>

      <div className="isoSortableCardsContainer">
        <FlipMove
          staggerDurationBy="30"
          duration={500}
          enterAnimation={state.enterLeaveAnimation}
          leaveAnimation={state.enterLeaveAnimation}
          typeName="ul"
        >
          {renderArticles()}

          <footer key="foot" className="isoAddRemoveControlBar">
            <div className="isoControlBtnGroup">
              <Toggle
                clickHandler={() => moveArticle('removedArticles', 'articles')}
                text={<IntlMessages id="toggle.addItem" />}
                icon="plus"
                active={state.removedArticles.length > 0}
              />
              <Toggle
                clickHandler={() => moveArticle('articles', 'removedArticles')}
                text={<IntlMessages id="toggle.removeItem" />}
                icon="close"
                active={state.articles.length > 0}
              />
            </div>
          </footer>
        </FlipMove>
      </div>
    </SortableCardWrapper>
  );
}
