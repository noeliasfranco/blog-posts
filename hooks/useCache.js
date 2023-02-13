import { useState, useEffect } from 'react';

const cache = new Map();

const useCache = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (cache.has(url)) {
      setData(cache.get(url));
      return;
    }

    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      cache.set(url, data);
    }
    fetchData();
}, [url]);

return data;
};

export default useCache;
