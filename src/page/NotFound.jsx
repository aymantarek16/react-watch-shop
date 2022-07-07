import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, []);

  return (
    <div>
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight : "bold",
          height: "80vh",
          backgroundColor: "#0b1c39",
          color: "#fff",
        }}
      >
        404 - Page Not Found{" "}
      </h1>
    </div>
  );
};

export default NotFound;
