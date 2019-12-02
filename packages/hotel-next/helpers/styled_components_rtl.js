import { css } from 'styled-components';
import { transform } from 'cssjanus';

function cssToString(cssStyles, p) {
  return cssStyles.reduce((result, v) => {
    let addition = v;
    if (typeof v === 'function') {
      const vResult = v(p);
      addition =
        typeof vResult === 'string' ? vResult : cssToString(vResult, p);
    }
    return result + addition;
  }, '');
}

const rtl = (...styles) => p => {
  const cssStyles = css(...styles);
  const dir = p.dir || p.theme.dir;
  return dir === 'rtl' ? transform(cssToString(cssStyles, p)) : cssStyles;
};

export default rtl;
