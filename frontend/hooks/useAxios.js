import axios from "axios";
import { useState } from "react";

const useAxios = (reqType, url, params) => {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios[reqType](url, params)
      .then((res) => setData(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };

  return [data, err, loading, getData];
};
export default useAxios;
