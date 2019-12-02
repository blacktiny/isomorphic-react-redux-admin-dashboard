import App from 'next/app';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import themes from '../themes/themes';
import AppLocale from '../translations/index';
import GlobalStyles from '@hotel/assets/style/Global.style';
import Layout from '../container/Layout/Layout';
import AuthProvider from '../context/AuthProvider';
import { SearchProvider } from '../context/SearchProvider';
import { withData } from '../helpers/restriction';

const currentAppLocale = AppLocale['en'];

class HotelCustomApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedTheme: 'defaultTheme',
      currentSelectedLanguage: currentAppLocale,
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const { query, pathname } = ctx;

    const { user, isLoggedIn } = withData(ctx);
    return { pageProps, query, pathname, user, isLoggedIn };
  }
  handleOnChangeTheme = themeName => {
    this.setState({
      currentSelectedTheme: themeName,
    });
  };

  handleOnChangeLanguage = language => {
    const selectedLanguage = AppLocale[language.locale];
    this.setState({
      currentSelectedLanguage: selectedLanguage,
    });
  };
  render() {
    const { Component, pageProps, query, user, isLoggedIn } = this.props;
    const { currentSelectedTheme, currentSelectedLanguage } = this.state;

    return (
      <AuthProvider>
        <SearchProvider query={query}>
          <Layout user={user} isLoggedIn={isLoggedIn}>
            <ConfigProvider locale={currentSelectedLanguage.antd}>
              <IntlProvider
                locale={currentSelectedLanguage.locale}
                messages={currentSelectedLanguage.messages}
              >
                <ThemeProvider theme={themes[currentSelectedTheme]}>
                  <>
                    <GlobalStyles />
                    <Component isLoggedIn={isLoggedIn} {...pageProps} />
                  </>
                </ThemeProvider>
              </IntlProvider>
            </ConfigProvider>
          </Layout>
        </SearchProvider>
      </AuthProvider>
    );
  }
}

export default HotelCustomApp;
