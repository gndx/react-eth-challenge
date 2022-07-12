import { useEffect, useState, useRef } from 'react';

export function useNearScreen() {
  const [show, setShow] = useState(false);
  const ele = useRef(null); // se puede usar como una prop
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !==
        'undefined' ?
        window.IntersectionObserver :
        import('intersection-observer'),
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => { // no soportado en todos los navegadores
        const { isIntersecting } = entries[0];
        console.log({ isIntersecting });
        if (isIntersecting) {
          console.log('si');
          setShow(true);
          observer.disconnect();
        }
      });
      console.log(ele);
      observer.observe(ele.current);
    });
  }, [ele]);

  return [show, ele];
}
