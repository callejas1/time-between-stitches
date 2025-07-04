import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // get curr route

  useEffect(() => {
    // scroll to top of the page whenever path name changes
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null; 
};

export default ScrollToTop;