import Axios from "axios"
import endPoints from "../../../constants/endPoints"
import {
  LoginBody, SignUpBody, LoginTag, SignUpTag, ILoginInput, IUserInput,
} from "./Queries"

export const LoginUser = ({ email, password }: ILoginInput, callback = (err: any, data: any) => null) => {
  Axios.post(endPoints.baseURL, LoginBody({ email, password }))
    .then(res => {
      if (res.data.data[LoginTag].error) {
        callback(res.data.data[LoginTag].error, null)
      } else {
        callback(null, res.data.data[LoginTag])
      }
    })
    .catch(err => console.log("Error", err))
}

export const SignUpUser = ({ name, email, phoneNumber, password, userType }: IUserInput, callback = (err: any, data: any) => null) => {
  Axios.post(endPoints.baseURL, SignUpBody({ name, email, phoneNumber, password, userType, hasUserDetail: false }))
    .then(res => {
      if (res.data.data[SignUpTag].error) {
        callback(res.data.data[SignUpTag].error, null)
      } else {
        callback(null, res.data.data[SignUpTag])
      }
    })
    .catch(err => console.log("Error", err))
}