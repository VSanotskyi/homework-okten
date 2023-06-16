// base url
const BASE_URL = "https://jsonplaceholder.typicode.com/users";
// DOM element
const container = document.querySelector(".container-js");

// fetch
fetchUsers(BASE_URL).then(creatUserList).catch(fetchError);

function fetchUsers(url) {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
    });
}

// creat
function creatUserList(users) {
    const userList = document.createElement("ul");

    userList.classList.add("user-list");

    users.map(({name, id}) => {
        const userItem = document.createElement("li");
        const userTitle = document.createElement("h3");
        const userLink = document.createElement("a");

        userItem.classList.add("user-item");
        userTitle.classList.add("user-title");
        userLink.classList.add("user-link");

        userTitle.innerText = `ID: ${id}, Name: ${name}`;
        userLink.innerText = "More information";
        userLink.href = `user-details/user-details.html?id=${id}`;


        userItem.append(userTitle, userLink);
        userList.appendChild(userItem);
    });

    container.appendChild(userList);
}

// error
function fetchError(err) {
    container.innerHTML =
        `<h1 class="title-error">Sorry, I can't find :(<br>${err}</h1>`;
}