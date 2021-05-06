import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let cardContainer = document.querySelector("div.cards");
axios.get("https://api.github.com/users/Ethan-Edmond")
  .then((data) => {
    cardContainer.append(cardMaker(data.data));
  })
  .catch((err) => {
    console.log("ERR:", err);
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

axios.get("https://api.github.com/users/Ethan-Edmond/followers")
  .then(data => {
    data.data.forEach(user => {
      cardContainer.append(cardMaker(user));
    });
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach((follower) => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then((data) => {
      cardContainer.append(cardMaker(data.data));
    })
    .catch(err => {
      console.log("ERR:", err);
    });
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker ({avatar_url, name, login, location, url, followers, following, bio}){
  // creating the elements
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUserName = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfile = document.createElement("p");
  const cardLink = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  // setting the classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");

  // setting the structure
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  cardProfile.textContent = "Profile: ";// guess how long it took me to figure this ordering out?
  cardProfile.appendChild(cardLink);

  // setting the content and attributes
  cardImage.src = avatar_url;
  cardName.textContent = name;
  cardUserName.textContent = login;
  cardLocation.textContent = `Location: ${location}`;
  cardLink.href = url;
  cardLink.textContent = url;
  cardFollowers.textContent = `Followers: ${followers}`;
  cardFollowing.textContent = `Following: ${following}`;
  cardBio.textContent = `Bio: ${bio}`;

  return card;
};
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
