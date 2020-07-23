import {useState, useEffect} from 'react';
const axios = require('axios');

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useAjax = (url, options) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response)=> response.json())
        .then((result) => {
          setData(result);
        })
    };
    fetchData();
  }, []);
  return {data};
};

export default useAjax;