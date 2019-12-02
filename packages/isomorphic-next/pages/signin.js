import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import jwtConfig from '@iso/config/jwt.config';
import Auth0 from '../authentication/Auth0';
import FirebaseLogin from '@iso/containers/FirebaseForm/FirebaseForm';
import authActions from '../authentication/actions';
import SignInStyleWrapper from '../styled/SignIn.styles';
const { login } = authActions;
export default function SignInPage(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(true));
  };

  const handleJWTLogin = () => {
    const { jwtLogin, history } = props;
    const userInfo = {
      username:
        (process.browser && document.getElementById('inputUserName').value) ||
        '',
      password:
        (process.browser && document.getElementById('inpuPassword').value) ||
        '',
    };
    // jwtLogin(history, userInfo);
  };

  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link href="/dashboard">
                <a>
                  <IntlMessages id="page.signInTitle" />
                </a>
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input
                  id="inputUserName"
                  size="large"
                  placeholder="Username"
                  defaultValue="demo@gmail.com"
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  id="inpuPassword"
                  size="large"
                  type="password"
                  placeholder="Password"
                  defaultValue="demodemo"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button
                  type="primary"
                  onClick={jwtConfig.enabled ? handleJWTLogin : handleLogin}
                >
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>

              <div className="isoInputWrapper isoOtherLogin">
                <Button
                  onClick={handleLogin}
                  type="primary"
                  className="btnFacebook"
                >
                  <IntlMessages id="page.signInFacebook" />
                </Button>
                <Button
                  onClick={handleLogin}
                  type="primary"
                  className="btnGooglePlus"
                >
                  <IntlMessages id="page.signInGooglePlus" />
                </Button>

                <Button
                  onClick={() => Auth0.login(handleLogin)}
                  type="primary"
                  className="btnAuthZero"
                >
                  <IntlMessages id="page.signInAuth0" />
                </Button>

                <FirebaseLogin
                  history={router}
                  login={token => dispatch(login(token))}
                />
              </div>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link href="/forgotpassword">
                  <div className="isoForgotPass">
                    <IntlMessages id="page.signInForgotPass" />
                  </div>
                </Link>
                <Link href="/signup">
                  <a>
                    <IntlMessages id="page.signInCreateAccount" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    </>
  );
}
