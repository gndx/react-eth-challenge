import React, { useEffect, useState } from "react";
import getData from "../utils/getData";


function initData() {
  const [appLoading, setAppLoading] = React.useState(true);
  const [data, setData] = React.useState({});

  useEffect(() => {
    getData("./brusmax.json").then(json => {
      setData(json.data);
      setAppLoading(false);
    });
  }, [setAppLoading]);
  return { appLoading, data };
}

export default initData;