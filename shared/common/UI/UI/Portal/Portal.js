// The portal element is inserted in the DOM tree after
// the Modal's children are mounted, meaning that children
// will be mounted on a detached DOM node. If a child
// component requires to be attached to the DOM tree
// immediately when mounted, for example to measure a
// DOM node, or uses 'autoFocus' in a descendant, add
// state to Modal and only render the children when Modal
// is inserted in the DOM tree.

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ children, rendererId }) {
  const [containerEl] = useState(document.createElement('div'));
  useEffect(() => {
    let portalRoot = document.getElementById(rendererId) || document.body;
    portalRoot.appendChild(containerEl);
    return () => portalRoot.removeChild(containerEl);
  });
  return ReactDOM.createPortal(children, containerEl);
}
