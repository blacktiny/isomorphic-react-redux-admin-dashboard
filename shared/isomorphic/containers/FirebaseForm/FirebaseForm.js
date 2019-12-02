import React from 'react';
import Button from '@iso/components/uielements/button';
import Input from '@iso/components/uielements/input';
import Modal from '@iso/components/Feedback/Modal';
import notification from '@iso/components/Feedback/Notification';
import {
  signInWithEmail,
  signUpWithEmailAndPassword,
  resetPassword,
} from '@iso/lib/firebase/firebase.authentication.util';

export default function(props) {
  const [state, setState] = React.useState({
    visible: false,
    email: 'demo@gmail.com',
    password: 'demodemo',
    confirmLoading: false,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };
  const handleCancel = e => {
    setState({
      ...state,
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
      ...state,
      confirmLoading: true,
    });
    let user;
    let message;
    let data;
    if (props.signup) {
      try {
        await signUpWithEmailAndPassword(email, password).then(authUser => {
          user = authUser.user;
          console.log(user, 'User');
        });
      } catch (error) {
        message = error.message;
        console.log(error.message, 'Error');
      }
    } else {
      try {
        await signInWithEmail(email, password).then(authUser => {
          user = authUser.user;
        });
      } catch (error) {
        message = error.message;
        console.log(error.message, 'Error');
      }
    }
    if (user) {
      const token = await user.getIdToken();
      props.login(token);
      props.history.push('/dashboard');
    } else {
      notification('error', message);
      setState({
        ...state,
        confirmLoading: false,
      });
    }
  };
  const handleResetPassword = () => {
    const { email } = state;
    if (!email) {
      notification('error', `Please fill in email.`);
      return;
    }
    resetPassword(email)
      .then(() =>
        notification('success', `Password reset email sent to ${email}.`)
      )
      .catch(error => notification('error', 'Email address not found.'));
  };
  return (
    <>
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
        okText={props.signup ? 'Sign Up' : 'Login'}
      >
        <form>
          <div className="isoInputWrapper">
            <label>Email</label>
            <Input
              name="email"
              size="large"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="isoInputWrapper" style={{ marginBottom: 10 }}>
            <label>Password</label>
            <Input
              name="password"
              type="password"
              size="large"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <span className="isoResetPass" onClick={handleResetPassword}>
            Reset Password
          </span>
        </form>
      </Modal>
    </>
  );
}
