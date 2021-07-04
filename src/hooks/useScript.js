import { useEffect } from 'react';

function useScript(src, handleOnload) {
  useEffect(
    () => {
      const node = document.createElement('script');
      node.src = src;
      node.type = 'text/javascript';
      node.async = true;
      node.onload = handleOnload;
      document.body.appendChild(node);
    },
    [src]
  );
}

export default useScript;
