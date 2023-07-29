import React, { useState } from "react";

var status = 0;
export default function Password() {
  const [data, setData] = useState("");
  const [count, setCount] = useState("");

  const changeHandler = (event) => {
    setData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    status = 0;
    let pass = data.password;

    if (pass) {
      if (pass.length >= 6 && pass.length <= 20) {
      } else {
        status += 1;
      }

      if (pass.match(/[A-Z]/)) {
      } else {
        status += 1;
      }
      if (pass.match(/[a-z]/)) {
      } else {
        status += 1;
      }
      if (pass.match(/[0-9]/)) {
      } else {
        status += 1;
      }
      for (let i = 0; i <= pass.length; i++) {
        let count = 0;
        for (let j = 0; j < pass.length; j++) {
          if (pass[i] == pass[j] && i > j) {
            break;
          }
          if (pass[i] == pass[j]) {
            count++;
          }
        }
        if (count >= 3) {
          if (pass[i] == pass[i + 1] && pass[i] == pass[i + 2]) {
            status += 1;
          } else {
          }
        }
      }
    } else {
      status = 5;
    }
    if (status === 0) {
      fetch("http://localhost:3003/create", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-origin": "*",
        },
        body: JSON.stringify({
          password: data.password,
        }),
      })
        .then((res) => res.json())
        .then((val) => {
          if (val.status === "done") {
            alert("Saved in database successfully");
          }
        });
    }

    setCount(status);
  };

  return (
    <div>
      <div>
        <input
          name="password"
          type="password"
          onChange={changeHandler}
          placeholder="Password"
        />
      </div>
      <div>
        <h1>{count}</h1>
      </div>
      <div>{count === 0 && <h3 color="green">Strong Password</h3>}</div>
      <div>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}
