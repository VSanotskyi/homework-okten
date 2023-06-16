// id
const postId = new URL(location.href).searchParams.get("postId");
// DOM element
const container = document.querySelector(".container-js");
// Base url
const BASE_URL_POST = `https://jsonplaceholder.typicode.com/posts/${postId}`;
const BASE_URL_COMMENTS = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

// Promise
Promise.all([fetchApi(BASE_URL_POST), fetchApi(BASE_URL_COMMENTS)])
    .then(data => {
        creatPostEl(data[0]);
        creatCommentList(data[1]);
    }).catch(fetchError);

// fetch
function fetchApi(url) {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
    });
}

// creat
function creatPostEl(post) {
    const {title, body} = post;

    const postContainer = document.createElement("div");
    const postTitle = document.createElement("h2");
    const postText = document.createElement("p");

    postContainer.classList.add("post-container");
    postTitle.classList.add("post-title");
    postText.classList.add("post-text");

    postTitle.innerText = title;
    postText.innerText = body;

    postContainer.append(postTitle, postText);
    container.prepend(postContainer);
}

function creatCommentList(comments) {
    const commentsTitle = document.createElement("h2");
    const commentList = document.createElement("ul");

    commentsTitle.classList.add("comments-title");

    commentsTitle.innerText = "Comments";

    comments.map(comment => {
        const {name, email, body: text} = comment;
        const commentItem = document.createElement("li");
        const commentTitle = document.createElement("h4");
        const commentEmail = document.createElement("p");
        const commentText = document.createElement("p");

        commentTitle.classList.add("comment-name");
        commentEmail.classList.add("comment-email");
        commentText.classList.add("comment-text");

        commentTitle.innerText = name;
        commentEmail.innerText = `email: ${email}`;
        commentText.innerText = text;

        commentItem.append(commentTitle, commentText, commentEmail);
        commentList.appendChild(commentItem);
    });

    container.append(commentsTitle, commentList);
}

// error
function fetchError(err) {
    container.innerHTML =
        `<h1 class="title-error">Sorry, I can't find :(<br>${err}</h1>`;
}