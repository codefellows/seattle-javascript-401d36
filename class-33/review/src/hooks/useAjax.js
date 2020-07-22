// a hooks that exports ajax request functionality

import { useState, useEffect } from 'react';
import axios from 'axios'

const useFetch = (options) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(options);
    if (options.url) {
      const fetchData = async () => {
        const response = await axios(options);
        setData(response.data);
        // fetch(url, options)
        //   .then((response) => response.json())
        //   .then((result) => {
        //     setData(result)
        //   })
        }
        fetchData();
    }
  }, [options]);

  return [ data ];
}

export default useFetch;