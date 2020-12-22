import React from "react";

const ErrorExample = () => {
  let title = "random title";
  // return <h2>useState error example</h2>;
  const handleClick = () => {
    title = "Something else";
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        {" "}
        change title{" "}
      </button>
    </>
  );
};

export default ErrorExample;
