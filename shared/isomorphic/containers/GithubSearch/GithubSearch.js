import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import { InputSearch } from '@iso/components/uielements/input';
import IntlMessages from '@iso/components/utility/intlMessages';
import notification from '@iso/components/Notification';
import actions from '@iso/redux/githubSearch/actions';
import GitResult from './GithubSearchResult';
import basicStyle from '@iso/assets/styles/constants';

const { gitSearch, onPageChange } = actions;

class GitSearch extends Component {
  onSearch = value => {
    if (value && value.length > 0) {
      this.props.gitSearch(value);
    } else {
      notification('error', 'Please type something');
    }
  };
  componentDidMount() {
    this.onSearch(this.props.GitSearch.searcText);
  }
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { onPageChange, GitSearch } = this.props;
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="sidebar.githubSearch" />
        </PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box style={{ minHeight: 220 }}>
              <InputSearch
                placeholder="Github Search"
                defaultValue={GitSearch.searcText}
                onSearch={this.onSearch}
              />
              <GitResult
                GitSearch={GitSearch}
                defaultValue={GitSearch.searcText}
                onPageChange={onPageChange}
              />
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
function mapStateToProps(state) {
  return { GitSearch: state.githubSearch };
}
export default connect(
  mapStateToProps,
  { gitSearch, onPageChange }
)(GitSearch);
