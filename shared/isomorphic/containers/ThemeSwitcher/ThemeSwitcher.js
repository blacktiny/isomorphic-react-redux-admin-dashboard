import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '@iso/redux/themeSwitcher/actions';
import Switcher from '@iso/components/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Themes from './config';
import bucketSVG from '@iso/assets/images/bucket.svg';
import IntlMessages from '@iso/components/utility/intlMessages';
import ThemeSwitcherStyle from './ThemeSwitcher.styles';

const { switchActivation, changeTheme } = Actions;

export default function ThemeSwitcher() {
  const { isActivated, topbarTheme, sidebarTheme, layoutTheme } = useSelector(
    state => state.ThemeSwitcher
  );
  const dispatch = useDispatch();
  const styleButton = { background: sidebarTheme.buttonColor };

  return (
    <ThemeSwitcherStyle
      className={isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher'}
    >
      <div className="componentTitleWrapper" style={styleButton}>
        <h3 className="componentTitle">
          <IntlMessages id="themeSwitcher.settings" />
        </h3>
      </div>

      <div className="SwitcherBlockWrapper">
        <Switcher
          config={Themes.sidebarTheme}
          changeTheme={(attr, theme) => dispatch(changeTheme(attr, theme))}
          selectedId={sidebarTheme.themeName}
        />

        <Switcher
          config={Themes.topbarTheme}
          changeTheme={(attr, theme) => dispatch(changeTheme(attr, theme))}
          selectedId={topbarTheme.themeName}
        />

        <Switcher
          config={Themes.layoutTheme}
          changeTheme={(attr, theme) => dispatch(changeTheme(attr, theme))}
          selectedId={layoutTheme.themeName}
        />
        <LanguageSwitcher />
      </div>

      <div className="purchaseBtnWrapper">
        <a
          href="https://themeforest.net/item/isomorphic-react-redux-admin-dashboard/20262330?ref=redqteam"
          className="purchaseBtn"
          target="_blank"
          style={styleButton}
        >
          <IntlMessages id="themeSwitcher.purchase" />
        </a>
      </div>

      <button
        type="primary"
        className="switcherToggleBtn"
        style={styleButton}
        onClick={() => {
          dispatch(switchActivation());
        }}
      >
        <img src={bucketSVG} alt="bucket" />
      </button>
    </ThemeSwitcherStyle>
  );
}
