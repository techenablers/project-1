import React from "react";

const LogIn = () => {
  return (
    <div
      className="modal-dialog modal-dialog-centered"
      style={{
        display: "flex",
        backgroundColor: "#212529",
        width: "500px",
        height: "550px",
      }}
    >
      <div className="col-12 col-lg-6 col-md-6 col-sm-6">
        <h3>LogIn</h3>
        <form>
          <label>USERNAME </label>
          <input type="text" />
          <label>PASSWORD </label>
          <input type="text" />
          <button>LOGIN</button>
        </form>
        <p>Forget Password ?</p>
        <p>Legal Information</p>
      </div>
      <div className="col-12 col-lg-6 col-md-6 col-sm-6">
        <h3>NEW MEMBER?</h3>
        <button> JoinNow</button>
      </div>
    </div>
  );
};

export default LogIn;
