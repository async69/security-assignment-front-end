import { ILoginInput, IUserInput } from "./user.types"

export type { IUserInput, ILoginInput }

export const SignUpBody = ({ name, phoneNumber, email, password, userType }: IUserInput) => ({
  query: `mutation {
    postUser(input: {
        name: "${name}",
        phoneNumber: "${phoneNumber}",
        email: "${email}",
        password: "${password}",
        userType: "${userType}"
      }) {
      _id name email password phoneNumber userType hasUserDetail
    }
  }`
})

export const SignUpTag = "postUser"

export const LoginBody = ({ email, password }: ILoginInput) => ({
  query: `mutation {
    signIn(email: "${email}", password: "${password}") {
      _id name email password phoneNumber hasUserDetail userType
      error {
        type message
      }
    }
  }`
})

export const LoginTag = "signIn"