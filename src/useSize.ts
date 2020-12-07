import { useState, useLayoutEffect, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { getTargetElement, BasicTarget } from './utils';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Size = { width?: number; height?: number };

function useSize(target: BasicTarget): Size {
  const [state, setState] = useState<Size>(() => {
    const el = getTargetElement(target);
    return {
      width: ((el || {}) as HTMLElement).clientWidth,
      height: ((el || {}) as HTMLElement).clientHeight
    };
  });

  useIsomorphicLayoutEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return () => {};
    }

    const resizeObserver = new ResizeObserver(entries => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        entries.forEach(entry => {
          setState({
            width: entry.target.clientWidth,
            height: entry.target.clientHeight
          });
        });
      });
    });

    resizeObserver.observe(el as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);

  return state;
}

export default useSize;
