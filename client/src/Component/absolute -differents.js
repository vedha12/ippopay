import React, { useState } from "react";

export default function Absolutedifferents() {
  const [get, setGet] = useState();
  // [3,9,7,3]
  // [-36,36]
  // [2,-1,0,4,-2,-9]

  // =============

  function sumOfMinAbsDifferences(arr, n) {
    let sum = 0;
    let diff;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i != j) {
          diff = Math.min(Math.abs(arr[i] - arr[j]));
        }
      }

      return diff;
    }
    // required sum
  }

  // let arr = [3, 9, 7, 3];
  let arr = [-36, 36];
  // let arr = [2, -1, 0, 4, -2, -9];
  let n = arr.length;

  console.log("Sum = " + sumOfMinAbsDifferences(arr, n));

  return <div></div>;
}
