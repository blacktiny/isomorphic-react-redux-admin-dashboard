import React from 'react';
import { ViewProfileWrapper, SingleInfoWrapper } from './ViewProfile.style';

const SingleInfo = ({ title, value }) => (
  <SingleInfoWrapper>
    <span className="viewProfileTitle">{title}</span>
    <span className="viewProfileValue">{value}</span>
  </SingleInfoWrapper>
);
export default function({
  viewProfile,
  toggleViewProfile,
  toggleMobileProfile,
}) {
  if (!viewProfile) {
    return null;
  }
  const {
    name,
    dob,
    mobileNo,
    gender,
    language,
    profileImageUrl,
  } = viewProfile;
  return (
    <ViewProfileWrapper>
      <div className="viewProfileTopBar">
        Contact Info
        <span
          onClick={() => {
            if (toggleMobileProfile) {
              toggleMobileProfile(false);
            }
            toggleViewProfile(false);
          }}
        >
          <i className="ion-android-close" />
        </span>
      </div>
      <div className="viewProfileContent">
        <div className="viewProfileImage">
          <img alt="#" src={profileImageUrl} />
          <h1>{name}</h1>
        </div>
        <div className="viewProfileQuickInfo">
          <SingleInfo title="Name" value={name} />
          <SingleInfo title="Date of Birth" value={dob} />
          <SingleInfo title="Mobile No" value={mobileNo} />
          <SingleInfo title="Gender" value={gender} />
          <SingleInfo title="Language" value={language} />
        </div>
      </div>
    </ViewProfileWrapper>
  );
}
