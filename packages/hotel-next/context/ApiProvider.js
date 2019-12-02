import React, { useEffect, useState, Fragment } from 'react';
import { getPaginatedItems } from '../helpers/pagination';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getUrlToState } from '../helpers/url_handler';
import { useLocation } from '../hooks/useLocation';

export const ApiContext = React.createContext();

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const Superfetch = async (url, method = 'GET', headers = {}, body = {}) => {
  NProgress.start();
  await sleep(2000); // demo purpose only
  let options = {
    method,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  };
  if (method === 'POST' || method === 'PUT') options = { ...options, body };

  // authentication
  // we will had custom headers here.

  return fetch(url, options)
    .then(res => {
      NProgress.done();
      return Promise.resolve(res.json());
    })
    .catch(error => Promise.reject(error));
};

const ApiProvider = props => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [limit, setLimit] = useState(props.limit || 10);
  const urlData = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const data = await Superfetch(props.url);
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [urlData]);

  // console.log(urlData, 'API');

  const paginate = () => {
    setPage(page + 1);
  };
  const refetch = async (url, method = 'GET', body = {}) => {
    try {
      const data = await Superfetch(url, method);
      setLoading(false);
      setPage(1);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setPage(page + 1);
      setLoadMore(true);
      setLoading(false);
    }, 1000);
  };
  // const searchParam = getUrlToState();
  // console.log(searchParam);

  return (
    <ApiContext.Provider
      value={{
        data: {
          ...getPaginatedItems(data, page, limit, loadMore),
          error,
        },
        paginate: paginate,
        loadMore: handleLoadMore,
        loading: loading,
        refetch,
        limit: limit,
        // searchParam: searchParam ? searchParam : {},
      }}
    >
      <Fragment>
        {/* {loading && '...loading'} */}
        {props.children}
      </Fragment>
    </ApiContext.Provider>
  );
};

export default ApiProvider;
