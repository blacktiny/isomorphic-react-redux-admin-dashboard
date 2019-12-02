import React from 'react';
import Slider from '@iso/components/uielements/slider';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';

export default function() {
  const onChange = value => {};

  const onAfterChange = value => {};

  return (
    <LayoutWrapper>
      <PageHeader>Slider</PageHeader>

      <Box
        title="Event"
        subtitle="The onChange callback function will fire when the user changes the slider's value. The onAfterChange callback function will fire when onmouseup fired."
      >
        <ContentHolder>
          <Slider
            defaultValue={30}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
          <Slider
            range
            step={10}
            defaultValue={[20, 50]}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
}
