import React from 'react';
import SectionGrid from '@hotel/components/SectionGrid/SectionGrid';
import { HotelPostGridLoader } from '@iso/ui/ContentLoader/ContentLoader';
import { SINGLE_POST_PAGE } from '../../../settings/constant';
const LISTED_POST_LIMIT = 6;
export default function AgentItemLists({
  processedData,
  loadMoreData,
  loading,
  deviceType,
}) {
  const listed_post =
    processedData[0] && processedData[0].listed_post
      ? processedData[0].listed_post
      : [];

  return (
    <SectionGrid
      link={SINGLE_POST_PAGE}
      columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
      deviceType={deviceType}
      data={listed_post}
      totalItem={listed_post.length}
      limit={LISTED_POST_LIMIT}
      loading={loading}
      handleLoadMore={loadMoreData}
      placeholder={<HotelPostGridLoader />}
    />
  );
}
