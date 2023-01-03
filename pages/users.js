// import UserList from "../components/users/UserList.js";
// import baseUrl from "../utils/baseUrl.js";

import baseUrl from "../utils/baseUrl.js";

export async function getUsers() {
  const usersResponse = await fetch(`${baseUrl}/users`);
  const users = await usersResponse.json();
  console.log(users);
}
