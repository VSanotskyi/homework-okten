const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const postId = new URL(location.href).searchParams.get("postId");
const container = document.querySelector(".container-js");

Promise.all([fetchPost(BASE_URL, postId), fetchComments(BASE_URL, postId)])
    .then(data => {
        creatPostEl(data[0]);
        creatCommentList(data[1]);
    }).catch(fetchError);

// ---

function fetchPost(url, id) {
    return fetch(`${url}/${id}`).then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
    });
}

function fetchComments(url, id) {
    return fetch(`${url}/${id}/comments`).then(response => {
        if (!response.ok) throw new Error(response.status);

        return response.json();
    });
}

// ---

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

function fetchError(err) {
    container.innerHTML =
        `<h1 class="title-error">Sorry, I can't find :(<br>${err}</h1>`;
}