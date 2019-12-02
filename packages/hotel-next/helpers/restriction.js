import { getCookie, TOKEN_COOKIE, USER_COOKIE } from './session';
import redirect from './redirect';

export function isAuthenticated(context) {
  const token = getCookie(TOKEN_COOKIE, context);
  const isLoggedIn = token ? true : false;
  if (isLoggedIn) {
    redirect(context, '/');
  }
  return { isLoggedIn };
}

export function secretPage(context) {
  const token = getCookie(TOKEN_COOKIE, context);
  const isLoggedIn = token ? true : false;
  if (!isLoggedIn) {
    redirect(context, '/login');
  }
  return { isLoggedIn };
}

export function withData(context) {
  const token = getCookie(TOKEN_COOKIE, context);
  const isLoggedIn = token ? true : false;
  const isUser = getCookie(USER_COOKIE, context);
  const userCookie = isUser ? JSON.parse(isUser) : {};
  const user = userCookie ? userCookie : {};
  return { user, isLoggedIn };
}
