// get id
const userId = new URL(location.href).searchParams.get("id");
// DOM element
const container = document.querySelector(".container-js");
const btn = document.querySelector(".btn");
// Base url
const BASE_URL_USER = `https://jsonplaceholder.typicode.com/users/${userId}`;
const BASE_URL_USER_POSTS = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
// arr container
const userInfoArray = [];

// fetch
fetchApi(BASE_URL_USER).then((user) => {
    creatUserInfo(user);
    btn.style.display = "block";
}).catch(fetchError);

function fetchApi(url) {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
    });
}

// listener
btn.addEventListener("click", openUserPosts);

function openUserPosts(evt) {
    evt.currentTarget.style.display = "none";
    fetchApi(BASE_URL_USER_POSTS).then(creatPostList).catch(fetchError);
}

// creat element
function creatUserInfo(user) {
    const userContainer = document.createElement("div");
    const arr = recursion(user);

    arr.map(el => {
        if ((typeof el) === "object") {
            const key = Object.keys(el).join("");
            const value = Object.values(el).join("");
            const userInfoText = document.createElement("p");

            userInfoText.classList.add("user-info-text");
            userInfoText.innerText = `${key}: ${value}`;

            userContainer.appendChild(userInfoText);
        } else {
            const userInfoTitle = document.createElement("h4");

            userInfoTitle.classList.add("user-info-title");
            userInfoTitle.innerText = el;

            userContainer.appendChild(userInfoTitle);
        }

        container.prepend(userContainer);
    });
}

function creatPostList(posts) {
    const postsTitle = document.createElement("h2");
    const postList = document.createElement("ul");

    postsTitle.classList.add("post-title");
    postList.classList.add("post-list");

    postsTitle.innerText = "Posts";

    posts.map(({id, title}) => {
        const postItem = document.createElement("li");
        const postLink = document.createElement("a");

        postItem.classList.add("post-item");
        postLink.classList.add("post-link");
        postLink.href = `../post-details/post-details.html?postId=${id}`;
        postLink.innerText = title;

        postItem.appendChild(postLink);
        postList.appendChild(postItem);
    });

    container.append(postsTitle, postList);
}

// recursion api response
function recursion(user) {
    for (const userKey in user) {
        const value = user[userKey];

        if ((typeof value) !== "object") {
            userInfoArray.push({[userKey]: value});
        }

        if ((typeof value) === "object") {
            userInfoArray.push(userKey + ":");
            recursion(value);
        }
    }

    return userInfoArray;
}

// error
function fetchError(err) {
    container.innerHTML = `<h1 class="title-error">${err}</h1>`;
}

