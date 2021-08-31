// const isDeployed = process.env.DEPLOYED !== "false"
const isDeployed = process.env.DEPLOYED === "false" || false

export default {
  baseURL: true?
  "http://localhost:4024/graphql" : "https://sebsib-api-v1.herokuapp.com/graphql",
  // baseURL: "https://e-learning-template-v1.herokuapp.com/graphql",
  // imageURL: "https://image-server-template-v1.herokuapp.com/upload",
  imageURL: "http://localhost:5053/upload"
}
