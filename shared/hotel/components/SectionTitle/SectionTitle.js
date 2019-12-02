import React from 'react';
import SectionTitleExtended from '@iso/ui/UI/SectionTitle/SectionTitle';
import SectionTitleWrapper from './SectionTitle.style';

const SectionTitle = ({ ...props }) => {
  return (
    <SectionTitleWrapper>
      <SectionTitleExtended {...props} />
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
