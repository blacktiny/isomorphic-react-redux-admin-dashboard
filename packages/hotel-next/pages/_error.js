import React from 'react';
import ErrorPage from '../container/404/404';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <ErrorPage errorCode={this.props.statusCode} />;
  }
}

export default Error;
