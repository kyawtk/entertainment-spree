import { useState, useEffect } from "react";
const useFetch = (url,page,genres,type) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
function getData(url){
  setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
}

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  },[page,genres,type]);
  
  return { data, loading, error, getData };
};
export default useFetch;