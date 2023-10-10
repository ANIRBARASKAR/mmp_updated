import React from "react";

const Settings = () => {
  return <>
      <div className="container-fluid">
        <div className=" text-right">
        <button className="btn btn-light rounded " style={{color:"green"}}>Forget password</button>
        </div>
        <h2  className="text-center mt-5" >Change Password</h2>
      <div className=''>
  
          <div className="">
          <label htmlFor="A1">Enter Existing Pasword</label>
           <input type="password" className="input-group form-control" style={{height:"35%"}} id="A1" placeholder="Enter Existing Password" />
           <i class="bi bi-eye-slash-fill"></i>
          </div>
          <div className="my-2"><label htmlFor="B1">New Pasword</label>
           <input type="password" className="form-control"  style={{height:"35%"}} id="B1" placeholder="New Password" />
           <i class="bi bi-eye-slash-fill"></i></div>
         <div className="my-2">
         <label htmlFor="A1">Confirm Pasword</label>
           <input type="password" className="form-control"  style={{height:"35%"}}  id="A1" placeholder="Re-enter New Password" />
           <i class="bi bi-eye-slash-fill"></i>
         </div>
       </div>

          <div className="text-center" >
          <button className="btn btn-danger btn-2xl my-5 rounded-pill text-center text-uppercase px-5 fw-bold"  style={{backgroundColor:"#2B6CB0"}}>Submit</button>
          </div>
      </div>
  </>
};

export default Settings;
