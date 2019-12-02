import React from 'react';
import Loader from '../utility/loader';
import HelperText from '../utility/helper-text';
import Button from '../uielements/button';
import PlayYoutubeVideo from './PlayYoutubeVideo';
import {
  YoutubeSearchListStyleWrapper,
  YoutubeSearchStyleWrapper,
} from './YoutubeSearch.style';

function SearchList(result, handleSelectedVideo) {
  return (
    <YoutubeSearchListStyleWrapper className="isoYoutubeResultList">
      {result.map(item => {
        const {
          publishedAt,
          title,
          description,
          channelTitle,
          thumbnails,
          channelId,
        } = item.snippet;
        const id = item.id.videoId;
        const updateDate = new Date(publishedAt).toDateString();
        const onClick = event => {
          event.preventDefault();
          handleSelectedVideo(item);
        };
        const onChannelClick = event => {
          event.preventDefault();
          event.stopPropagation();
          window.open(`https://www.youtube.com/channel/${channelId}`, '_blank');
        };
        return (
          <div key={id} className="isoSingleVideoResult" onClick={onClick}>
            <div className="videoThumb">
              <img alt="#" src={thumbnails.default.url} />
            </div>

            <div className="videoDescription">
              <h3 className="videoName">
                <a href="# ">{`${title} `}</a>
              </h3>

              <div className="ChannelNameAndDate">
                <a onClick={onChannelClick} className="channelTitle" href="# ">
                  {`${channelTitle} `}
                </a>
                <span className="uploadDate">{updateDate}</span>
              </div>

              {description ? <p>{description}</p> : ''}
            </div>
          </div>
        );
      })}
    </YoutubeSearchListStyleWrapper>
  );
}
function YoutubeResult({ YoutubeSearch, onPageChange }) {
  const [selectedVideo, setSelectrdVideo] = React.useState(null);

  const handleCancel = () => {
    handleSelectedVideo(null);
  };
  const handleSelectedVideo = selectedVideo => {
    setSelectrdVideo(selectedVideo);
  };

  const {
    searcText,
    result,
    loading,
    error,
    nextPageToken,
    prevPageToken,
    total_count,
  } = YoutubeSearch;
  if (!searcText) {
    return null;
  }
  if (loading) {
    return <Loader />;
  }
  if (error || !total_count) {
    return <HelperText text="THERE ARE SOME ERRORS" />;
  }
  if (result.length === 0) {
    return <HelperText text="No Result Found" />;
  }
  return (
    <YoutubeSearchStyleWrapper className="isoYoutubeSearchResult">
      <p className="isoTotalResultFind">
        <span>{`${total_count}`} videos found</span>
      </p>

      {selectedVideo ? (
        <PlayYoutubeVideo
          selectedVideo={selectedVideo}
          handleCancel={handleCancel}
        />
      ) : (
        ''
      )}
      {SearchList(result, handleSelectedVideo)}

      <div className="youtubeSearchPagination">
        {prevPageToken ? (
          <Button onClick={() => onPageChange(searcText, prevPageToken)}>
            Previous
          </Button>
        ) : (
          ''
        )}
        {nextPageToken ? (
          <Button onClick={() => onPageChange(searcText, nextPageToken)}>
            Next
          </Button>
        ) : (
          ''
        )}
      </div>
    </YoutubeSearchStyleWrapper>
  );
}

export default YoutubeResult;
