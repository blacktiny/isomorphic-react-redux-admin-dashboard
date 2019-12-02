import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Board from './Board/Board';
import ModalRoot from './rootModal';
import DrawerRoot from './rootDrawer';
import BoardLists from './Board/BoardList/BoardList';
import CreateBoard from './Board/BoardCreateOrUpdate/BoardCreateOrUpdate';

export default function ScrumBoard() {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${match.path}`} component={BoardLists} />
        <Route exact path={`${match.path}/:id`} component={CreateBoard} />
        <Route path={`${match.path}/project/:id`} component={Board} />
      </Switch>
      <ModalRoot />
      <DrawerRoot />
    </>
  );
}
