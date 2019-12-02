import React from 'react';
import PropTypes from 'prop-types';
import SectionTitleWrapper, {
  TitleWrapper,
  LinkWrapper,
} from './SectionTitle.style';

const SectionTitle = ({ className, title, link, ...props }) => {
  // Add all classs to an array
  const addAllClasses = ['section_title'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SectionTitleWrapper className={addAllClasses.join(' ')} {...props}>
      {title && <TitleWrapper className="title_wrapper">{title}</TitleWrapper>}
      {link && <LinkWrapper className="link_wrapper">{link}</LinkWrapper>}
    </SectionTitleWrapper>
  );
};

SectionTitle.propTypes = {
  /** ClassName of the SectionTitle. */
  className: PropTypes.string,
  /** Add here Heading component from common components. */
  title: PropTypes.element,
  /** Add here TextLink component from common components. */
  link: PropTypes.element,
};

export default SectionTitle;
