import React from 'react';
import Button from '@iso/ui/Antd/Button/Button';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Wrapper, { FollowerList, ListItem } from './Followers.styles';

const Followers = ({ data }) => {
  return (
    <Wrapper>
      <h3>
        <strong>{data.length}</strong> Followers
      </h3>
      <FollowerList>
        {data.length > 0 &&
          data.map(follower => (
            <ListItem key={`follower-key${follower.id}`}>
              <AvatarCard avatar={follower.avatar} name={follower.name} />
              <Button>Following</Button>
            </ListItem>
          ))}
      </FollowerList>
    </Wrapper>
  );
};

export default Followers;
