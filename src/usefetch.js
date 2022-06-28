import { useState, useEffect } from "react";
const Usefetch = (url) => {
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [errorstate, seterrorstate] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log({res});
        if (!res.ok) {
          throw Error("data not found");
        }
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setisloading(false);
        seterrorstate(null);
      })
      .catch((err) => {
        seterrorstate(err.message);
        setisloading(false);
      });
  }, [url]);
  return { data, isloading, errorstate };
};

export default Usefetch;
