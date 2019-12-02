import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactDatesStyleWrapper } from './ReactDates.style';
/*
 * For Localization enable this code [example : French language as "fr"]
 */
// import moment from 'moment';
// import 'moment/locale/fr';

class DateRangePickerBox extends Component {
  constructor(props) {
    super(props);
    const separator =
      this.props.item && this.props.item.separator
        ? this.props.item.separator
        : '/';
    const dateFormat =
      this.props.item && this.props.item.format
        ? this.props.item.format
        : 'llll';
    this.state = {
      focusedInput: null,
      startDate: this.props.startDate ? this.props.startDate : null,
      endDate: this.props.endDate ? this.props.endDate : null,
      dateFormat,
      separator,
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
    /*
     * For Localization enable this code [example : French language as "fr"]
     */
    // moment.locale('fr');
  }

  onDateChangeFunc = ({ startDate, endDate }) => {
    const { dateFormat } = this.state;
    this.setState({ startDate, endDate });
    if (startDate !== null && endDate !== null) {
      this.props.updateSearchData({
        setStartDate: startDate.format(dateFormat),
        setEndDate: endDate.format(dateFormat),
      });
    }
  };

  onFocusChangeFunc = focusedInput => {
    return this.setState({ focusedInput });
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    // DateRangePickerBox props list
    const {
      className,
      item,
      startDateId,
      endDateId,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      showClearDates,
      isRTL,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      block,
      numberOfMonths,
      regular,
      noBorder,
      ...rest
    } = this.props;

    // Add all classs to an array **************
    const addAllClasses = ['date_picker'];
    // className prop checking **************
    if (className) {
      addAllClasses.push(className);
    }

    // React-Dates DateRangePicker Props List
    const defaultCalenderProps = {
      startDateId: startDateId ? startDateId : 'start_unique_id',
      endDateId: endDateId ? endDateId : 'end_date_unique_id',
      startDate,
      endDate,
      focusedInput,
      onFocusChange: this.onFocusChangeFunc,
      onDatesChange: this.onDateChangeFunc,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      isRTL,
      showClearDates: showClearDates ? showClearDates : false,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      numberOfMonths: numberOfMonths ? numberOfMonths : 2,
      block,
      regular,
      noBorder,
    };

    return (
      <ReactDatesStyleWrapper className={addAllClasses.join(' ')}>
        <DateRangePicker {...defaultCalenderProps} />
      </ReactDatesStyleWrapper>
    );
  }
}

DateRangePickerBox.propTypes = {
  /** startDateId of the date-picker field */
  startDateId: PropTypes.string.isRequired,
  /** endDateId of the date-picker field */
  endDateId: PropTypes.string.isRequired, //
  /** startDatePlaceholderText of the date-picker field */
  startDatePlaceholderText: PropTypes.string,
  /** endDatePlaceholderText of the date-picker field */
  endDatePlaceholderText: PropTypes.string,
  /** disabled of the date-picker field */
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['START_DATE', 'END_DATE']),
  ]),

  /** showClearDates of the date-picker field */
  showClearDates: PropTypes.bool,
  /** isRTL of the date-picker field */
  isRTL: PropTypes.bool,
  /** orientation of the date-picker field */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** anchorDirection of the date-picker field */
  anchorDirection: PropTypes.oneOf(['left', 'right']),
  /** withPortal of the date-picker field */
  withPortal: PropTypes.bool,
  /** withFullScreenPortal of the date-picker field */
  withFullScreenPortal: PropTypes.bool,
  /** small of the date-picker field */
  small: PropTypes.bool,
  /** numberOfMonths of the date-picker field */
  numberOfMonths: PropTypes.number,
  /** block of the date-picker field */
  block: PropTypes.bool,
  /** regular of the date-picker field */
  regular: PropTypes.bool,
  /** noBorder of the date-picker field */
  noBorder: PropTypes.bool,
  /** updateSearchData of the date-picker field to send component data to parent component */
  updateSearchData: PropTypes.func,
};

export default DateRangePickerBox;
