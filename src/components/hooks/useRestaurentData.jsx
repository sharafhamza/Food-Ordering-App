import React, { useEffect, useState } from "react";
import { Single_Url } from "../../utils/constant";

const useRestaurentData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  async function fetchData() {
    const data = await fetch(Single_Url + resId);
    const json = await data.json();
    setResInfo(json?.data);
  }
  return resInfo;
};

export default useRestaurentData;
