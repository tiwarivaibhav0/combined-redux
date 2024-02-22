import React, { useEffect } from "react";

const PromiseComp = () => {
  useEffect(() => {
    const promise = getData();

    promise.then((data) => {
      console.log("Promise is " + data);
    }).catch((data) => {
      console.log("Promise is " + data);
    });

    console.log(promise);
    console.log("independent flow");
  }, []);

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!true) {
          resolve("resolved");
        } else {
          const err=new Error("rejected")
          reject(err);
        }
      }, 2000);
    });
  };
  return <div>PromiseComp</div>;
};

export default PromiseComp;
