// This hook is to prevent react-router from restoring previous scrolling position
// so switching tabs would always scroll to the top

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  });

  return null;
};

export default withRouter(ScrollToTop);