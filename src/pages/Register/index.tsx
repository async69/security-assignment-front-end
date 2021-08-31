import React, { useState } from "react";
import '../../App.css'
import { IUserDoc, ErrorType } from "../../store/States/Auth/user.types"
import { SignUpUser } from "../../store/States/Auth/actions"
import { UpdateMainBuffer } from "../../store/States/Buffer/"
import { connect } from "react-redux"
import routes from "../../constants/routes";
import { Redirect } from "react-router";

const Register = (props: any) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const handleSubmit = () => {
    SignUpUser({ name, email, phoneNumber, password, userType: "USER", hasUserDetail: false }, (err: ErrorType, data: IUserDoc) => {
      if (err) {
        console.log("Error occured", err)
        setErrMsg(err.message)
      } else {
        props.UpdateMainBuffer(data)
        setRedirect(routes.home)
      }
      return null
    })
  }
  return redirect !== ""? <Redirect to={redirect} /> : (
    <form className="container">
      <h3>Register</h3>

      <div className="form-group" style={{ marginTop: 15 }}>
        <input className="form-control" placeholder="Enter full name" onChange={({ currentTarget: { value } }) => setName(value)} />
      </div>

      <div className="form-group" style={{ marginTop: 15 }}>
        <input type="email" className="form-control" placeholder="Enter email" onChange={({ currentTarget: { value } }) => setEmail(value)} />
      </div>

      <div className="form-group" style={{ marginTop: 15 }}>
        <input type="email" className="form-control" placeholder="Enter phone number" onChange={({ currentTarget: { value } }) => setPhoneNumber(value)} />
      </div>

      <div className="form-group" style={{ marginTop: 15 }}>
        <input type="password" className="form-control" placeholder="Enter password" onChange={({ currentTarget: { value } }) => setPassword(value)} />
      </div>

      <div className="tm15">
        <label style={{ color: "red" }}>
          {errMsg}
        </label>
      </div>

      <button type="button" className="btn btn-primary btn-block" style={{ marginTop: 15 }} onClick={handleSubmit}>Submit</button>
    </form>
  );
}

const mapStateToProps = (_: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
  UpdateMainBuffer: (data: any) => dispatch(UpdateMainBuffer(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
