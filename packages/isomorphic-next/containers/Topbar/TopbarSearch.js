import React from 'react';
import { useSelector } from 'react-redux';
import { InputSearch } from '@iso/components/uielements/input';
import TopbarSearchModal from './TopbarSearchModal.styles';

function Searchbar(props) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <InputSearch
      id="InputTopbarSearch"
      size="large"
      placeholder="Enter search text"
      onBlur={props.onBlur}
    />
  );
}

export default function TopbarSearch() {
  const [visible, setVisibility] = React.useState(false);
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);

  const handleCancel = () => {
    setVisibility(false);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setVisibility(false);
    }, 200);
  };
  const showModal = () => {
    setVisibility(true);
  };
  return (
    <div onClick={showModal}>
      <i
        className="ion-ios-search-strong"
        style={{ color: customizedTheme.textColor }}
      />
      <TopbarSearchModal
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        wrapClassName="isoSearchModal"
        width="60%"
        footer={null}
      >
        <div className="isoSearchContainer">
          {visible ? <Searchbar onBlur={handleBlur} /> : ''}
        </div>
      </TopbarSearchModal>
    </div>
  );
}
