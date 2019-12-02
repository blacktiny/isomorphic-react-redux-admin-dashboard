import { useEffect, useState } from 'react';

// utils
const isClient = typeof window === 'object';
const on = (obj, ...args) => obj.addEventListener(...args);
const off = (obj, ...args) => obj.removeEventListener(...args);

const patchHistoryMethod = method => {
  const original = window.history[method];
  window.history[method] = function(state) {
    const result = original.apply(this, arguments);
    const event = new Event(method.toLowerCase());
    event.state = state;
    window.dispatchEvent(event);
    return result;
  };
};
if (isClient) {
  patchHistoryMethod('pushState');
  patchHistoryMethod('replaceState');
}
export const useLocation = () => {
  const buildState = trigger => {
    const { state, length } = window.history;
    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    } = window.location;
    return {
      trigger,
      state,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    };
  };
  const [state, setState] = useState(
    isClient
      ? buildState('load')
      : {
          trigger: 'load',
          length: 1,
        }
  );
  const onChange = trigger => setState(buildState(trigger));
  const onPopstate = () => onChange('popstate');
  const onPushstate = () => onChange('pushstate');
  const onReplacestate = () => onChange('replacestate');
  useEffect(() => {
    on(window, 'popstate', onPopstate);
    on(window, 'pushstate', onPushstate);
    on(window, 'replacestate', onReplacestate);
    return () => {
      off(window, 'popstate', onPopstate);
      off(window, 'pushstate', onPushstate);
      off(window, 'replacestate', onReplacestate);
    };
  }, [0]);
  return state;
};
