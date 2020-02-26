import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';
import '../style/dashboard.css'

class DateForm extends React.Component {

  constructor(props) {
    super(props)
  }

  disabledDate = current => {
    return current > moment().endOf('day');
  }

  handleChange = (date, dateString) => {
    // console.log(date, dateString);
    this.props.filterArticles(dateString)
  }

  render() {
    return (
      <div className="dateForm">
        <DatePicker
          format="YYYY-MM-DD"
          size={'large'}
          disabledDate={this.disabledDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default DateForm;