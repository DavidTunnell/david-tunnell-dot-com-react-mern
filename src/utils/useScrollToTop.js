import { useEffect } from "react";

//custom hooks in react must start with 'use' or it wont work
const useScrollToTop = (url) => {
    //scroll to top of window
    useEffect(() => {
        window.scrollTo(0, 0);
    });
};

export default useScrollToTop;
