import React from "react";
import './loading.scss';
import Logo from '../../../src/img/logoLoading.png';
const Loading = () => {
  return (
    <>
      <div className="loading">
      <img src={Logo} alt="" />
       <div className="shadow">
       <div className="loader">
        </div>
       </div>
      </div>
    </>
  );
};

export default Loading;
