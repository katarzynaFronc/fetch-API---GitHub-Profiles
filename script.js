const baseUrl = "https://api.github.com";

//----------------------------------------------------------------

//----------getUsers function-------------------------------------

async function getUsers() {
  const usersResponse = await fetch(`${baseUrl}/users`);
  const users = await usersResponse.json();
  console.log(users);
  return users;
}

getUsers();

//----------------------------------------------------------------

//----------userSearch function-----------------------------------

const userSearch = document.querySelector(".input__field");
userSearch.addEventListener("change", function () {
  let userSearch = document.querySelector(".input__field").value;
  fetch(`${baseUrl}/users/${userSearch}`)
    .then((result) => result.json())
    .then((user) => {
      document.getElementById("avatar").innerHTML = `<img src="${user.avatar_url}"/>`;
      document.getElementById("name").innerHTML = `${user.name}`;
      document.getElementById("description").innerHTML = `${user.bio}`;
      document.getElementById("followers").innerHTML = `${user.followers} Followers`;
      document.getElementById("following").innerHTML = `${user.following} Following`;
      document.getElementById("repositories").innerHTML = `${user.public_repos} repositories`;
    });
});
