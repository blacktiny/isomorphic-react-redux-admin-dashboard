import React from 'react';
import Button from '@iso/ui/Antd/Button/Button';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Wrapper, { FollowingList, ListItem } from './Following.styles';

const Following = ({ data }) => {
  return (
    <Wrapper>
      <h3>
        <strong>{data.length}</strong> Following
      </h3>
      <FollowingList>
        {data.length > 0 &&
          data.map(follower => (
            <ListItem key={`follower-key${follower.id}`}>
              <AvatarCard avatar={follower.avatar} name={follower.name} />
              <Button>Following</Button>
            </ListItem>
          ))}
      </FollowingList>
    </Wrapper>
  );
};

export default Following;
