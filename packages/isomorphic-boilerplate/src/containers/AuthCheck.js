import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import Button from '@iso/components/uielements/button';
import notification from '@iso/components/Notification';
import AuthHelper from '@iso/lib/helpers/authHelper';

class AuthCheck extends Component {
  state = { loading: false };
  checkDemo = () => {
    this.setState({ loading: true });
    AuthHelper.checkDemoPage(this.props.idToken).then(result => {
      if (result.error) {
        notification('error', result.error);
      } else {
        notification('success', `status: ${result.status}`, result.message);
      }
      this.setState({ loading: false });
    });
  };
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <Button loading={this.state.loading} onClick={this.checkDemo}>
            Check Auth Status
          </Button>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
export default connect(
  state => ({
    idToken: state.Auth.idToken,
  }),
  {}
)(AuthCheck);
