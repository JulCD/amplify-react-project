import React, { useState, useEffect } from "react";
import { get } from "aws-amplify/api";

export const GitHubBornOn = () => {
  const  [borninfo, updateBornTime] = useState([]);

  
  const getGitHubInfoByUser = async () => {
    
    const restOperation = await get({
      apiName: "cryptoapitwo",
      path: "/born"
    });


    const { body } = await restOperation.response;
    const json = await body.json();
    updateBornTime(json.bornTime);

  };

  useEffect(() => {
    getGitHubInfoByUser();
  }, []);


  return (
    <h2>
      The GitHub user {borninfo.login} was born on {borninfo.created_at}
    </h2>
  );
};