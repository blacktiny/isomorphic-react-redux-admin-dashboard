import React from 'react';
import SectionGrid from '@hotel/components/SectionGrid/SectionGrid.cra';
import { HotelPostGridLoader } from '@iso/ui/ContentLoader/ContentLoader';
import useDataApi from '@iso/lib/hooks/useDataApi';
import { SINGLE_POST_PAGE } from '../../../settings/constant';

const AgentItemLists = () => {
  const { data, loadMoreData, loading, total } = useDataApi('/data/agent.json');
  const listed_post = data[0] && data[0].listed_post ? data[0].listed_post : [];

  return (
    <SectionGrid
      link={SINGLE_POST_PAGE}
      data={listed_post}
      loading={loading}
      limit={8}
      totalItem={total.length}
      columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
      placeholder={<HotelPostGridLoader />}
      handleLoadMore={loadMoreData}
    />
  );
};

export default AgentItemLists;
