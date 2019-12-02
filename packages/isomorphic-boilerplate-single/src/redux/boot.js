import { store } from './store';
import authActions from '@iso/redux/auth/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
