import React from 'react';
import Logo from '@iso/ui/Logo/LogoNextJs';
import ForgerPassWordImage from '@hotel/assets/images/login-page-bg.jpg';
import DemoLogo from '@hotel/assets/images/logo-with-text.svg';
import ForgetPassWordForm from '../container/ForgetPassWord/ForgetPassWordForm';
import ForgetPassWordWrapper, {
  Title,
  TitleInfo,
  ForgetPassWordFormWrapper,
  ForgetPassWordBannerWrapper,
} from '../container/ForgetPassWord/ForgetPassWord.style';

export default function ForgetPassWord() {
  return (
    <ForgetPassWordWrapper>
      <ForgetPassWordFormWrapper>
        <Logo withLink linkTo="/" src={DemoLogo} title="Hotel Logo" />
        <Title>Welcome Back</Title>
        <TitleInfo>Enter your email to recover your account</TitleInfo>
        <ForgetPassWordForm />
      </ForgetPassWordFormWrapper>
      <ForgetPassWordBannerWrapper>
        <div
          style={{
            backgroundImage: `url(${ForgerPassWordImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </ForgetPassWordBannerWrapper>
    </ForgetPassWordWrapper>
  );
}
