import React from 'react';
import SectionGrid from '@hotel/components/SectionGrid/SectionGrid';
import { HotelPostGridLoader } from '@iso/ui/ContentLoader/ContentLoader';
import { SINGLE_POST_PAGE } from '../../../settings/constant';

const FAVOURITE_POST_LIMIT = 6;
export default function AgentFavItemLists({
  processedData,
  loadMoreData,
  loading,
  deviceType,
}) {
  const favourite_post =
    processedData[0] && processedData[0].favourite_post
      ? processedData[0].favourite_post
      : [];

  return (
    <SectionGrid
      link={SINGLE_POST_PAGE}
      columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
      deviceType={deviceType}
      data={favourite_post}
      totalItem={favourite_post.length}
      limit={FAVOURITE_POST_LIMIT}
      loading={loading}
      handleLoadMore={loadMoreData}
      placeholder={<HotelPostGridLoader />}
    />
  );
}
