import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Form, Icon, Input, Button } from 'antd';
import { login } from '../../store/actions'
import { connect } from 'react-redux'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function mapDispatchToProps(dispatch) {
  return {
    login: obj => {
      dispatch(login(obj));
    },
  };
}

class HorizontalLoginForm extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
    this.props.form.resetFields()
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const HorizontalForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);
const LoginForm = connect(null, mapDispatchToProps)(HorizontalForm);
export default LoginForm;