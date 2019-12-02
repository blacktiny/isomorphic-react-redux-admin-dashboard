import React from 'react';
import SectionGrid from '@hotel/components/SectionGrid/SectionGrid.cra';
import { HotelPostGridLoader } from '@iso/ui/ContentLoader/ContentLoader';
import useDataApi from '@iso/lib/hooks/useDataApi';
import { SINGLE_POST_PAGE } from '../../../settings/constant';

const AgentFavItemLists = () => {
  const { data, loadMoreData, loading } = useDataApi('/data/agent.json');
  const favourite_post =
    data[0] && data[0].favourite_post ? data[0].favourite_post : [];

  return (
    <SectionGrid
      link={SINGLE_POST_PAGE}
      data={favourite_post}
      loading={loading}
      limit={6}
      totalItem={favourite_post.length}
      columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
      placeholder={<HotelPostGridLoader />}
      handleLoadMore={loadMoreData}
    />
  );
};

export default AgentFavItemLists;
