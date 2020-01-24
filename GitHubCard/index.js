/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let troopaloopArray = axios
  .get("https://api.github.com/users/troopaloop")
  .then(response => {
    console.log(response);
   
  })

console.log(troopaloopArray)

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function cardMaker(object) {
  //making elements for the specified component
  let userCard = document.createElement('div');
  let userImage = document.createElement('img');
  let cardInfo = document.createElement('div');
  let nameIRL = document.createElement('h3');
  let userName = document.createElement('p');
  let userLocation = document.createElement('p');
  let userProfile = document.createElement('p');
  let userURL = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let userBio = document.createElement('p');
  //adding classes to the new elements
  userCard.classList.add('card');
  cardInfo.classList.add('card-info');
  nameIRL.classList.add('name');
  userName.classList.add('username');
  //build tree-like structure for the new elements to create a block
  userCard.appendChild(userImage);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(nameIRL);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userURL);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(userBio);

  return userCard;

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

