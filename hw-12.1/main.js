const BASE_URL = "https://jsonplaceholder.typicode.com";
const container = document.querySelector(".container-js");

fetchUsers(BASE_URL).then(creatUsersList);

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

function showPosts(evt) {
    evt.target.disabled = true;

    const el = evt.target;
    const id = el.dataset.id;

    fetchPosts(BASE_URL, id).then(posts => {
        creatPosts(posts, el, id);
    });
}

function showComments(evt) {
    const el = evt.target;
    const id = el.dataset.post;

    fetchComments(BASE_URL, id).then(comments => {
        creatComments(comments, el);
    });
}

function hidePosts(evt) {
    const el = evt.target;
    const id = el.dataset.btnId;
    const arrBtn = container.getElementsByClassName(
        "user-post-btn");

    el.parentElement.classList.add("hide-btn");

    for (const btnEl of arrBtn) {
        if (id === btnEl.dataset.id) {
            btnEl.disabled = false;
        }
    }
}

// --------------------------------------------------------

function creatUsersList(users) {
    const ul = document.createElement("ul");

    ul.classList.add("user-list");

    users.map(user => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const btn = document.createElement("button");

        li.classList.add("user-item");
        p.classList.add("user-text");
        btn.classList.add("user-post-btn");

        btn.dataset.id = `${user.id}`;

        p.innerText = `Name: ${user.name}, ID: ${user.id}`;
        btn.innerText = "Show posts";

        btn.addEventListener("click", showPosts);

        li.append(p, btn);
        ul.appendChild(li);
    });

    container.append(ul);
}

function creatPosts(posts, el, id) {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const btnHidePost = document.createElement("button");

    ul.classList.add("post-list");
    btnHidePost.innerText = "Hide posts";
    btnHidePost.classList.add("hide-post-btn", "btn");

    btnHidePost.dataset.btnId = `${id}`;

    btnHidePost.addEventListener("click", hidePosts);

    posts.map(post => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const btn = document.createElement("button");

        li.classList.add("post-item");
        p.classList.add("post-text");
        btn.classList.add("comments-btn");

        btn.dataset.post = `${post.id}`;

        p.innerText = `${post.body}`;
        btn.innerText = "Show comments";

        btn.addEventListener("click", showComments);

        li.append(p, btn);
        ul.appendChild(li);
    });

    div.append(ul, btnHidePost);
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
