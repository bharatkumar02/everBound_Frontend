import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function usePersistentTab(
  defaultTab = 'Registration Info',
  key = 'tab',
) {
  const [params, setParams] = useSearchParams();
  const initial = params.get(key) || defaultTab;
  const [tab, setTab] = useState(initial);

  useEffect(() => {
    const p = new URLSearchParams(params);
    p.set(key, tab);
    setParams(p, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return [tab, setTab];
}
