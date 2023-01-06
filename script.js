const baseUrl = "https://api.github.com";

//----------------------------------------------------------------

async function getUsers() {
  const usersResponse = await fetch(`${baseUrl}/users`);
  const users = await usersResponse.json();
  console.log(users);
  return users;
}

getUsers();

//----------------------------------------------------------------

// const fetchUsers = fetch(`${baseUrl}`)
//   .then((result) => result.json())
//   .then((user) => {
//     console.log(user);
//   });

//----------------------------------------------------------------

const userAvatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const userDescription = document.getElementById("description");
const userFollowers = document.getElementById("followers");
const userFollowing = document.getElementById("following");
const userRepositories = document.getElementById("repositories");

const defaultUser = fetch(`${baseUrl}/users/dominikmlynarczyk`)
  .then((result) => result.json())
  .then((user) => {
    userAvatar.innerHTML = `<img src="${user.avatar_url}"/>`;
    userName.innerHTML = `${user.name}`;
    userDescription.innerHTML = `${user.bio}`;
    userFollowers.innerHTML = `${user.followers} Followers`;
    userFollowing.innerHTML = `${user.following} Following`;
    userRepositories.innerHTML = `${user.public_repos} repositories`;
  });

const userSearch = document.querySelector(".input__field");
userSearch.addEventListener("change", function () {
  let userSearch = document.querySelector(".input__field").value;
  fetch(`${baseUrl}/users/${userSearch}`)
    .then((result) => result.json())
    .then((user) => {
      userAvatar.innerHTML = `<img src="${user.avatar_url}"/>`;
      userName.innerHTML = `${user.name}`;
      userDescription.innerHTML = `${user.bio}`;
      userFollowers.innerHTML = `${user.followers} Followers`;
      userFollowing.innerHTML = `${user.following} Following`;
      userRepositories.innerHTML = `${user.public_repos} repositories`;
    });
});
