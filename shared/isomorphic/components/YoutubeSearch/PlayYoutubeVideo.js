import React from 'react';
import YouTube from 'react-youtube';
import DefaultModal from '../Feedback/Modal';
import { YoutubeModal } from './YoutubeSearch.style';

const Modal = YoutubeModal(DefaultModal);

export default function({ selectedVideo, handleCancel }) {
  const ops = { playerVars: { autoplay: 1 } };
  return (
    <Modal
      title={selectedVideo.snippet.tittle}
      visible={true}
      footer={null}
      onCancel={handleCancel}
      cancelText="Cancel"
      className="youtubeVideoModal"
      width="670px"
    >
      <div className="isoCardWrapper" />
      <YouTube videoId={selectedVideo.id.videoId} opts={ops} />
    </Modal>
  );
}
