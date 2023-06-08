/*
 const userList = document.querySelector(".list-js");
 const container = document.querySelector(".user-container");
 const URL = "http://jsonplaceholder.typicode.com/users/";

 getUsers().then(creatUserItem).catch(console.log);
 userList.addEventListener("click", readMore);

 function readMore(evt) {
 evt.preventDefault();
 if (evt.target.nodeName !== "BUTTON") return;

 const id = evt.target.dataset.id;
 console.log(id);
 getUsers(id).then(creatUserInfo).catch(console.log);
 }

 function getUsers(id = "") {
 return fetch(`${URL}${id}`).then(response => {
 if (!response.ok) throw new Error(response.statusText);
 return response.json();
 });
 }

 function creatUserItem(users) {
 userList.innerHTML = users.map(user => {
 return `<li class="item">
 <h2 class="user-name">Name: ${user.name}</h2>
 <p class="user-id">ID: ${user.id}</p>
 <button
 data-id="${user.id}"
 class="user-link">Read more</button>
 </li>`;
 }).join("");
 }

 function creatUserInfo(user) {
 const {
 id,
 name,
 username,
 email,
 phone,
 website,
 address: {
 street,
 suite,
 city,
 zipcode,
 geo: {
 lat,
 lng,
 },
 },
 company: {
 name: companyName,
 catchPhrase,
 bs,
 },
 } = user;

 container.innerHTML = `
 <p class="user-text">id: ${id}</p>
 <p class="user-text">name: ${name}</p>
 <p class="user-text">user name: ${username}</p>
 <p class="user-text">email: ${email}</p>
 <p class="user-text">phone: ${phone}</p>
 <p class="user-text">website: ${website}</p>
 <p class="user-text">address:</p>
 <p class="user-text">city: ${city}</p>
 <p class="user-text">street: ${street}</p>
 <p class="user-text">suite: ${suite}</p>
 <p class="user-text">zipcode: ${zipcode}</p>
 <p class="user-text">geo:</p>
 <p class="user-text">lat: ${lat}</p>
 <p class="user-text">lng: ${lng}</p>
 <p class="user-text">company:</p>
 <p class="user-text">name: ${companyName}</p>
 <p class="user-text">catchPhrase: ${catchPhrase}</p>
 <p class="user-text">bs: ${bs}</p>
 `;
 }
 */

// ---

const container = document.querySelector(".user-container-js");
const URL = "https://jsonplaceholder.typicode.com/users";

fetchUsers().then(creatUsers).catch(console.log);

function fetchUsers() {
    return fetch(URL).then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
    });
}

function creatUsers(users) {
    users.map(user => {
        const h2 = document.createElement("h2");
        const a = document.createElement("a");

        h2.innerText = `Name: ${user.name}, Id: ${user.id}`;
        a.href = `user-details.html?id=${user.id}`;

        a.appendChild(h2);
        container.appendChild(a);
    });
}