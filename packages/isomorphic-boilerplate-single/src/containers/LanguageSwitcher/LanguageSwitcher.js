import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from '@iso/components/utility/intlMessages';
import actions from '@iso/redux/languageSwitcher/actions';
import config from './config';

const { changeLanguage } = actions;

export default function LanguageSwitcher() {
  const { language } = useSelector(state => state.LanguageSwitcher);
  const dispatch = useDispatch();
  return (
    <div className="themeSwitchBlock">
      <h4>
        <IntlMessages id="languageSwitcher.label" />
      </h4>
      <div className="themeSwitchBtnWrapper">
        {config.options.map(option => {
          const { languageId, icon } = option;
          const customClass =
            languageId === language.languageId
              ? 'selectedTheme languageSwitch'
              : 'languageSwitch';

          return (
            <button
              type="button"
              className={customClass}
              key={languageId}
              onClick={() => {
                dispatch(changeLanguage(languageId));
              }}
            >
              <img src={icon} alt="flag" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
