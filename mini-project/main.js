const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const container = document.querySelector(".container-js");

fetchUsers(BASE_URL).then(creatUserList).catch(console.log);

function fetchUsers(url) {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
    });
}

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