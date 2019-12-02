import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sticky from 'react-stickynode';
import Toolbar from '@iso/ui/UI/Toolbar/Toolbar';
import CategorySearchNext from '../container/Listing/Search/CategorySearch/CategorySearchNext';
import Switch from '@iso/ui/Antd/Switch/Switch';
import SectionGrid from '@hotel/components/SectionGrid/SectionGrid';
import { HotelPostGridLoader } from '@iso/ui/ContentLoader/ContentLoader';
import ListingMap from '../container/Listing/ListingMap';
import { SearchContext } from '../context/SearchProvider';
import ListingWrapper, {
  PostsWrapper,
  Label,
  ShowMapSwitch,
} from '../container/Listing/Listing.style';
import GetAPIData, {
  Paginator,
  SearchedData,
  SearchStateKeyCheck,
  ProcessAPIData,
} from '../helpers/get_api_data';
import { getDeviceType } from '../helpers/get_devide_type';
import { SINGLE_POST_PAGE } from '../settings/constant';
import {
  LISTING_PAGE_POST_LIMIT,
  LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP,
  LISTING_PAGE_COLUMN_WIDTH_WITH_MAP,
} from '../settings/config';
const FilterDrawer = dynamic(() =>
  import('../container/Listing/Search/MobileSearchView')
);

export default function ListingPage({ processedData, deviceType }) {
  const { state, dispatch } = useContext(SearchContext);
  const statekey = SearchStateKeyCheck(state);

  // states
  const [posts, setPosts] = useState(
    processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []
  );
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (statekey === true) {
      const newData = SearchedData(processedData);
      setPosts(newData);
    } else {
      setPosts(processedData.slice(0, LISTING_PAGE_POST_LIMIT) || []);
    }
  }, [statekey]);

  // map toggle handler
  const handleMapToggle = () => {
    setShowMap(showMap => !showMap);
  };

  // pagination
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Paginator(posts, processedData, LISTING_PAGE_POST_LIMIT);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP;
  if (showMap) {
    columnWidth = LISTING_PAGE_COLUMN_WIDTH_WITH_MAP;
  }

  let columnCount = 'col-24';
  if (deviceType === 'desktop' && showMap === true) {
    columnCount = 'col-12';
  }

  return (
    <ListingWrapper>
      <Head>
        <title>Listing | A react next listing template</title>
      </Head>

      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            deviceType === 'desktop' ? <CategorySearchNext /> : <FilterDrawer />
          }
          right={
            <ShowMapSwitch>
              <Label>Show map</Label>
              <Switch defaultChecked={false} onChange={handleMapToggle} />
            </ShowMapSwitch>
          }
        />
      </Sticky>

      <PostsWrapper className={columnCount}>
        <SectionGrid
          link={SINGLE_POST_PAGE}
          columnWidth={columnWidth}
          deviceType={deviceType}
          data={posts}
          totalItem={processedData.length}
          limit={LISTING_PAGE_POST_LIMIT}
          loading={loading}
          handleLoadMore={handleLoadMore}
          placeholder={<HotelPostGridLoader />}
        />
      </PostsWrapper>
      {showMap && <ListingMap loading={loading} mapData={posts} />}
    </ListingWrapper>
  );
}

ListingPage.getInitialProps = async ({ req, query }) => {
  // use this query to filter data from your fetch data
  const apiUrl = [
    {
      endpoint: 'hotel',
      name: 'listingHotel',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  const deviceType = getDeviceType(req);
  return { processedData, query, deviceType };
};
