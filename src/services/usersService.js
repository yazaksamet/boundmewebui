import axios from "axios";

const apiEndpoint = "https://boundme.herokuapp.com/api/users";

export async function getUsers() {
  const users = await axios.get(apiEndpoint);
  console.log(users.data);
  return users.data;
}
