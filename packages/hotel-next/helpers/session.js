import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

export const FIREBASE_COOKIE = '__session'; //firebase only accept __session cookie

export const TOKEN_COOKIE = 'token';
export const USER_COOKIE = 'user';

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (ctx, key = 'id_token') => {
  const cookie = nextCookie(ctx);
  const token = cookie && cookie[key] ? cookie[key] : false;
  if (!token) return null;
  return token;
};

export const getCookie = (key, context = {}) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(context, key);
};

export const setCookie = (key, token) => {
  cookie.set(key, token, { expires: 7 });
};

export const removeCookie = key => {
  cookie.remove(key);
};

export const setFirebaseCookie = (key, token) => {
  // get cookie from __session using getCookie function
  // parse the data from cookie
  // assign the token to the key
  // call set cookie function with the new data

  try {
    const cookieData = getCookie(FIREBASE_COOKIE);
    const data = cookieData ? JSON.parse(cookieData) : {};
    data[key] = token;
    setCookie(FIREBASE_COOKIE, data);
  } catch (error) {
    console.log(error, 'setFirebaseCookie');
  }
};

export const removeFirebaseCookie = key => {
  // get cookie from __session  using getCookie function
  // parse the data from cookie
  // remove the key from the data
  // call set cookie function with the new data
  try {
    const cookieData = getCookie(FIREBASE_COOKIE);
    const data = cookieData ? JSON.parse(cookieData) : {};
    if (data && data.hasOwnProperty(key)) {
      delete data[key];
      setCookie(FIREBASE_COOKIE, data);
    } else {
      // console.log(
      //   `${key} is probably not available inside the cookie removeFirebaseCookie`
      // );
    }
  } catch (error) {
    console.log(error, 'removeFirebaseCookie');
  }
};

export const getFirebaseCookie = (key, context = false) => {
  // get cookie from __session using getCookie function
  // parse the data from cookie
  // get the relatedData using the key
  try {
    const cookieData = getCookie(FIREBASE_COOKIE, context);
    const data = cookieData ? JSON.parse(cookieData) : {};
    if (data && data.hasOwnProperty(key)) {
      return data[key];
    } else {
      // console.log(
      //   `${key} is probably not available inside the cookie getFirebaseCookie`
      // );
    }
  } catch (error) {
    console.log(error, 'getFirebaseCookie');
  }
};
