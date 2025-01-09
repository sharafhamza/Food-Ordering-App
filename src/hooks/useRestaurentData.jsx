import React, { useEffect, useState } from "react";

const useRestaurentData = (url) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  async function fetchData() {
    const data = await fetch(url);
    const json = await data.json();
    setResInfo(json?.data);

    return resInfo;
  }
};

export default useRestaurentData;
