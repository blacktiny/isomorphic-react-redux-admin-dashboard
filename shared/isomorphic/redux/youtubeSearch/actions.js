const actions = {
  YOUTUBE_SEARCH: 'YOUTUBE_SEARCH',
  YOUTUBE_SUCCESS_RESULT: 'YOUTUBE_SUCCESS_RESULT',
  YOUTUBE_ERROR_RESULT: 'YOUTUBE_ERROR_RESULT',
  youtubeSearch: searcText => ({
    type: actions.YOUTUBE_SEARCH,
    payload: { searcText },
  }),
  onPageChange: (searcText, pageToken) => ({
    type: actions.YOUTUBE_SEARCH,
    payload: { searcText, pageToken },
  }),
  youtubeSearchSuccess: (
    result,
    total_count,
    nextPageToken,
    prevPageToken
  ) => ({
    type: actions.YOUTUBE_SUCCESS_RESULT,
    result,
    total_count,
    nextPageToken,
    prevPageToken,
  }),
  youtubeSearchError: () => ({
    type: actions.YOUTUBE_ERROR_RESULT,
  }),
};
export default actions;
