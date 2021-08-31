import React from "react";
import '../../App.css'
import { Link } from "react-router-dom"
import routes from "../../constants/routes";
import { useState } from "react";
import { IUserDoc, ErrorType } from "../../store/States/Auth/user.types"
import { LoginUser } from "../../store/States/Auth/actions"
import { UpdateMainBuffer } from "../../store/States/Buffer/"
import { connect } from "react-redux"
import { Redirect } from "react-router";

const Login = (props: any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const handleSubmit = () => {
    LoginUser({ email, password }, (err: ErrorType, data: IUserDoc) => {
      if (err) {
        console.log("An error occured", err)
        setErrMsg(err.message)
      }
      else {
        props.UpdateMainBuffer(data)
        setRedirect(routes.home)
      }
      return null
    })
  }

  return redirect !== ""? <Redirect to={redirect} /> : (
    <form className="container">
      <h3>Sign In</h3>

      <div className="form-group" style={{ marginTop: 15 }}>
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={({ currentTarget: { value } }) => setEmail(value)} />
      </div>

      <div className="form-group" style={{ marginTop: 15 }}>
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" onChange={({ currentTarget: { value } }) => setPassword(value)} />
      </div>

      <div className="tm15">
        <label style={{ color: "red" }}>
          {errMsg}
        </label>
      </div>

      <div className="tm15">
        <label>
          <Link to={routes.register}>Don't have an account</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
