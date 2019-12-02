import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import { InputSearch } from '@iso/components/uielements/input';
import IntlMessages from '@iso/components/utility/intlMessages';
import notification from '@iso/components/Notification';
import YoutubeResult from '@iso/components/YoutubeSearch/Result';
import basicStyle from '@iso/assets/styles/constants';
import actions from '@iso/redux/youtubeSearch/actions';
import NoAPIKey from '@iso/components/utility/noApiKey';
import youtubeSearchApi from '@iso/config/youtube_search.config';

const { youtubeSearch, onPageChange } = actions;

export default function YoutubeSearch() {
  const YoutubeSearch = useSelector(state => state.YoutubeSearch);
  const dispatch = useDispatch();
  const onSearch = React.useCallback(
    value => {
      if (value && value.length > 0) {
        dispatch(youtubeSearch(value));
      } else {
        notification('error', 'Please type something');
      }
    },
    [dispatch]
  );
  const handlePageChange = React.useCallback(
    (text, token) => {
      dispatch(onPageChange(text, token));
    },
    [dispatch]
  );
  React.useEffect(() => {
    onSearch(YoutubeSearch.searcText);
  }, [onSearch, YoutubeSearch.searcText]);
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>
        <IntlMessages id="sidebar.youtubeSearch" />
      </PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          {youtubeSearchApi ? (
            <Box style={{ minHeight: 220 }}>
              <InputSearch
                placeholder="Search on Youtube"
                defaultValue={YoutubeSearch.searcText}
                onSearch={onSearch}
              />
              <YoutubeResult
                YoutubeSearch={YoutubeSearch}
                onPageChange={handlePageChange}
              />
            </Box>
          ) : (
            <NoAPIKey />
          )}
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
