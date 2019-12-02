import React from 'react';
import { Button } from 'antd';
import { Wrapper, Title, Text, Icon } from './NoBoardFounds.style';
import emptyProjectPlaceHolder from '@iso/assets/images/icon/12.svg';
export default function NoBoardFounds({ history, match }) {
  return (
    <Wrapper>
      <Icon src={emptyProjectPlaceHolder} />
      <Title>You Currently have no projects</Title>
      <Text>Let's Create your first project in Isomorphic</Text>
      <Button type="primary" onClick={() => history.push(`${match.url}/new`)}>
        Create Project
      </Button>
    </Wrapper>
  );
}
