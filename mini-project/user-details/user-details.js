const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const userId = new URL(location.href).searchParams.get("id");
const container = document.querySelector(".container-js");
const btn = document.querySelector(".btn");
const userInfoArray = [];

fetchUserInfo(BASE_URL, userId).then(creatUserInfo).catch(fetchError);

btn.addEventListener("click", openUserPosts);

// ---

function fetchUserInfo(url, id) {
    return fetch(`${url}/${id}`).then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
    });
}

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

// ----

function fetchUserPosts(url, id) {
    return fetch(`${url}/${id}/posts`).then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
    });
}

function openUserPosts(evt) {
    evt.currentTarget.style.display = "none";
    fetchUserPosts(BASE_URL, userId).then(creatPostList).catch(fetchError);
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

// ---

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

// ---

function fetchError(err) {
    container.innerHTML = `<h1 class="title-error">${err}</h1>`;
}

