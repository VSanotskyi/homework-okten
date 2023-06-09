const BASE_URL = "https://jsonplaceholder.typicode.com";
const container = document.querySelector(".container-js-hw12");

fetchUsers(BASE_URL).then(creatUsersList);

// -------------------------------------------------------

container.addEventListener("click", showPosts);

function showPosts(evt) {
    if (evt.target.nodeName !== "BUTTON") return;

    evt.target.disabled = true;
    const el = evt.target;
    const id = evt.target.dataset.id;

    fetchPosts(BASE_URL, id).then(posts => {
        creatPosts(posts, el, id);
    });


    /*if (evt.target.classList.contains("comments-btn")) {
     const el = evt.target;
     const id = evt.target.dataset.post;

     fetchComments(BASE_URL, id).then(comments => {
     creatComments(comments, el);
     });

     return;
     }

     if (evt.target.classList.contains("hide-post-btn")) {
     evt.target.parentElement.classList.add("hide-btn");
     const id = evt.target.dataset.btnId;

     const arrBtn = evt.currentTarget.getElementsByClassName(
     "user-post-btn");

     for (const arrEl of arrBtn) {
     if (id === arrEl.dataset.id) {
     arrEl.disabled = false;
     }
     }
     }*/
}

// --------------------------------------------------------

function fetchUsers(url) {
    return fetch(`${url}/users`).then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
    });
}

function fetchPosts(url, id) {
    return fetch(`${url}/posts?userId=${id}`).then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
    });
}

function fetchComments(url, id) {
    return fetch(`${url}/comments?postId=${id}`).then(response => {
        if (!response.ok) throw new Error(response.statusText);

        return response.json();
    });
}

// --------------------------------------------------------------

function creatUsersList(users) {
    const ul = document.createElement("ul");
    ul.classList.add("user-list");

    users.map(user => {
        const li = document.createElement("li");
        li.classList.add("user-item");
        li.innerHTML = `
                        <p class="user-text">Name: ${user.name}, ID: ${user.id}</p>
                        <button class="user-post-btn" 
                                data-id="${user.id}"
                                type="button">Show posts</button>`;
        li.classList.add("user-item");

        ul.appendChild(li);
    });

    container.append(ul);
}

function creatPosts(posts, el, id) {
    const div = document.createElement("div");
    const postList = document.createElement("ul");
    const btn = document.createElement("button");

    postList.classList.add("post-list");
    btn.type = "button";
    btn.innerText = "Hide posts";
    btn.classList.add("hide-post-btn", "btn");
    btn.dataset.btnId = `${id}`;

    posts.map(post => {
        const postItem = document.createElement("li");
        postItem.classList.add("post-item");

        postItem.innerHTML = `<h3 class="post-title">${post.title}</h3>
                                <p class="post-text">${post.body}</p>
                                <button data-post="${post.id}" 
                                        class="comments-btn" 
                                        type="button">
                                    Show comments
                                </button>`;

        postList.append(postItem);
    });

    div.append(postList, btn);
    el.after(div);
}

function creatComments(comments, el) {
    const commentList = document.createElement("ul");
    commentList.classList.add("comment-list");

    comments.map(comment => {
        const commentItem = document.createElement("li");
        commentItem.classList.add("comment-item");
        commentItem.innerHTML = `<h3 class="comment-title">${comment.name}</h3>
                                <p class="comment-text">${comment.body}</p>
                                `;

        commentList.append(commentItem);
    });

    el.after(commentList);
}
