import baseUrl from "./utils/baseUrl.js";
import defaultUrl from "./utils/defaultUrl.js";

const userAvatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const userDescription = document.getElementById("description");
const userFollowers = document.getElementById("followers");
const userFollowing = document.getElementById("following");
const userRepositories = document.getElementById("repositories");
const userRepos = document.getElementById("repos");
const userSearch = document.querySelector(".input__field");

//--------------------------remove repos--------------------------

function removeRepos() {
  while (userRepos.firstChild) {
    userRepos.removeChild(userRepos.firstChild);
  }
}

//-----------------------default user's repos----------------------

async function defaultUserRepos() {
  const addRepos = document.getElementById("repos");
  await fetch(`${defaultUrl}/repos`)
    .then((result) => result.json())
    .then(function (data) {
      data.forEach((repo) => {
        const newLink = document.createElement("a");
        newLink.innerHTML = `<a href="${repo.svn_url}" target ="_blank" >${repo.name}</a>`;
        addRepos.appendChild(newLink);
      });
    });
}

//-----------------------search user's repos----------------------

function searchUserRepos() {
  userSearch.addEventListener("change", function () {
    removeRepos();
    let userSearch = document.querySelector(".input__field").value;
    const addRepos = document.getElementById("repos");
    fetch(`${baseUrl}/users/${userSearch}/repos`)
      .then((result) => result.json())
      .then(function (data) {
        data.forEach((repo) => {
          const newLink = document.createElement("a");
          newLink.innerHTML = `<a href="${repo.svn_url}" target ="_blank" >${repo.name}</a>`;
          addRepos.appendChild(newLink);
        });
      });
  });
}

//--------------------------default user--------------------------

async function defaultUser() {
  await fetch(`${defaultUrl}`)
    .then((result) => result.json())
    .then((user) => {
      userAvatar.innerHTML = `<img src="${user.avatar_url}"/>`;
      userName.innerHTML = `${user.name}`;
      userDescription.innerHTML = `${user.bio}`;
      userFollowers.innerHTML = `${user.followers} Followers`;
      userFollowing.innerHTML = `${user.following} Following`;
      userRepositories.innerHTML = `${user.public_repos} repositories`;
    });
  defaultUserRepos();
}
defaultUser();

//--------------------------search user--------------------------
async function searchUser() {
  await userSearch.addEventListener("change", function () {
    const userSearch = document.querySelector(".input__field").value;
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

  searchUserRepos();
}
searchUser();

//----------------------------------------------------------------
