import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@iso/components/Feedback/Modal';
import Button from '@iso/components/uielements/button';
import actions from '@iso/redux/languageSwitcher/actions';
import config from './config';

const { switchActivation, changeLanguage } = actions;

export default function LanguageSwitcher({ isActivated }) {
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.LanguageSwitcher);
  // const {
  //   isActivated,
  //   switchActivation,
  //   changeLanguage,
  // } = this.props;
  return (
    <div className="isoButtonWrapper">
      <Button
        type="primary"
        className=""
        onClick={() => dispatch(switchActivation())}
      >
        Switch Language
      </Button>

      <Modal
        title={'Select Language'}
        visible={isActivated}
        onCancel={() => dispatch(switchActivation())}
        cancelText="Cancel"
        footer={[]}
      >
        <div>
          {config.options.map(option => {
            const { languageId, text } = option;
            const type =
              languageId === language.languageId ? 'primary' : 'success';
            return (
              <Button
                type={type}
                key={languageId}
                onClick={() => {
                  dispatch(changeLanguage(languageId));
                }}
              >
                {text}
              </Button>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
