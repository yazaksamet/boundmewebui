import axios from "axios";

const apiEndpoint = "https://boundme.herokuapp.com/api/users";

export async function getUsers() {
  const users = await axios.get(apiEndpoint);
  console.log(users.data);
  return users.data;
}

export async function registerUser(user) {
  const registerResponse = await axios.post(apiEndpoint, user);
  console.log(user);
  return registerResponse.data;
}
