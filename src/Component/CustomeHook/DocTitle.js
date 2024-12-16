import { useEffect } from 'react';

const useDocTitle = (count) => {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]); // Correctly call useEffect with a function and dependency array
};

export default useDocTitle;
