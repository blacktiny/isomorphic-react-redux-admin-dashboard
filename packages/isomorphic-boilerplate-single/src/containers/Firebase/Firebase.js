import React from 'react';
import Button from '@iso/components/uielements/button';
import Input from '@iso/components/uielements/input';
import Modal from '@iso/components/Feedback/Modal';
import notification from '@iso/components/Notification';
import Firebase from '../Authentication/FirebaseAuth/FirebaseAuth';

export default function(props) {
  const [state, setState] = React.useState({
    visible: false,
    email: 'demo@gmail.com',
    password: 'demodemo',
    confirmLoading: false,
  });
  const showModal = () => {
    setState({
      visible: true,
    });
  };
  const handleCancel = e => {
    setState({
      visible: false,
    });
  };
  const handleLogin = async () => {
    const { email, password } = state;
    if (!(email && password)) {
      notification('error', 'Please fill in email. and password');
      return;
    }
    setState({
      confirmLoading: true,
    });
    const self = this;
    let data;
    if (props.signup) {
      data = await Firebase.signup(Firebase.EMAIL, {
        email,
        password,
      });
    } else {
      data = await Firebase.login(Firebase.EMAIL, {
        email,
        password,
      });
    }
    const user = data && data.user ? data.user : false;
    const message =
      user === false && data && data.message
        ? data.message
        : 'Sorry Some error occurs';
    if (user) {
      const token = await user.getIdToken();
      props.login(token);
      props.history.push('/dashboard');
    } else {
      notification('error', message);
      self.setState({
        confirmLoading: false,
      });
    }
  };
  const resetPassword = () => {
    const { email } = state;
    if (!email) {
      notification('error', `Please fill in email.`);
      return;
    }
    Firebase.resetPassword(email)
      .then(() =>
        notification('success', `Password reset email sent to ${email}.`)
      )
      .catch(error => notification('error', 'Email address not found.'));
  };
  return (
    <div>
      <Button type="primary" onClick={showModal} className="btnFirebase">
        {props.signup ? 'Sign up with Firebase' : 'Sign in with Firebase'}
      </Button>
      <Modal
        title={props.signup ? 'Sign up with Firebase' : 'Sign in with Firebase'}
        visible={state.visible}
        confirmLoading={state.confirmLoading}
        onCancel={handleCancel}
        onOk={handleLogin}
        className="isoFirebaseLoginModal"
        cancelText="Cancel"
        okText="Login"
      >
        <form>
          <div className="isoInputWrapper">
            <label>Email</label>
            <Input
              ref={email => (email = email)}
              size="large"
              placeholder="Email"
              value={state.email}
              onChange={event => {
                setState({ email: event.target.value });
              }}
            />
          </div>
          <div className="isoInputWrapper" style={{ marginBottom: 10 }}>
            <label>Password</label>
            <Input
              type="password"
              size="large"
              placeholder="Password"
              value={state.password}
              onChange={event => {
                setState({ password: event.target.value });
              }}
            />
          </div>
          <span className="isoResetPass" onClick={resetPassword}>
            Reset Password
          </span>
        </form>
      </Modal>
    </div>
  );
}
