import { ErrorType } from "../../../constants/interfaces"

export type { ErrorType }

export interface ILoginInput {
  email: string
  password: string
}

export interface IUserInput {
  name: string
  email: string
  phoneNumber: string
  password: string
  userType: string
  hasUserDetail: boolean
}

export interface IUserEdit {
  _id: string
  name: string
  email: string
  phoneNumber: string
  password: string
  userType: string
  hasUserDetail: boolean
}

export interface IUserDoc extends IUserInput {
  _id: string
  error: ErrorType
}