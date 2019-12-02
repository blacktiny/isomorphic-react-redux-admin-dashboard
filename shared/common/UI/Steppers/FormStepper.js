import React, { Fragment, Component } from 'react';
import { Formik } from 'formik';
import { IoIosArrowBack } from 'react-icons/io';
import { Progress } from 'antd';

class PercentageCalculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formchild, pageStack, lastPage } = this.props;
    const original = formchild ? formchild.length : 0;
    let value = 0;

    if (original !== pageStack) {
      value = Math.floor((pageStack * 100) / original);
    } else if (original === pageStack) {
      value = 100;
    } else {
      value = 0;
    }

    return (
      <Fragment>
        {lastPage ? (
          <Progress percent={100} showInfo={false} />
        ) : (
          <Progress percent={value} showInfo={false} />
        )}
      </Fragment>
    );
  }
}

class FormStepper extends Component {
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues,
    };
  }

  next = values => {
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));
  };

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values, bag) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;

    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      bag.setSubmitting(false);
      this.next(values);
    }
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Fragment>
        <PercentageCalculator
          formchild={this.props.children}
          pageStack={page}
          lastPage={isLastPage}
        />
        <Formik
          initialValues={values}
          enableReinitialize={false}
          validate={this.validate}
          onSubmit={this.handleSubmit}
          render={({ values, handleSubmit, isSubmitting, handleReset }) => (
            <form onSubmit={handleSubmit}>
              <div className="steps-content">{activePage}</div>
              <div className="steps-action">
                <div className="inner-wrapper">
                  {page > 0 && (
                    <button
                      type="button"
                      className="back-step-btn"
                      onClick={this.previous}
                    >
                      <IoIosArrowBack /> Back
                    </button>
                  )}

                  {!isLastPage && (
                    <button className="next-step-btn" type="submit">
                      Next
                    </button>
                  )}
                  {isLastPage && (
                    <button
                      className="submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        />
      </Fragment>
    );
  }
}
export default FormStepper;
