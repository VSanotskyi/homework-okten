const container = document.querySelector(".container-user-info");
const BASE_URL = "https://jsonplaceholder.typicode.com/users"
const url = new URL(location.href);
const id = url.searchParams.get("id");
const arr = [];

fetchUserInfo(id).then(creatUserInfo).catch(console.log);

function fetchUserInfo(id) {
    return fetch(`${BASE_URL}?id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);

            return response.json();
        });
}

function creatUserInfo([user]) {
    const ul = document.createElement("ul");
    /*  const {
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
     } = user;*/

    const arr = recursion(user);

    for (const el of arr) {
        const key = Object.keys(el).join("");
        const value = Object.values(el).join("");

        const li = document.createElement("li");
        li.innerHTML = `<p>${key}: ${value}</p>`;

        ul.appendChild(li);
    }

    container.appendChild(ul);
}

function recursion(obj) {
    for (const objKey in obj) {
        const value = obj[objKey];

        if ((typeof value) !== "object") {
            arr.push({[objKey]: value});
        }

        if ((typeof value) === "object") {
            recursion(value);
        }
    }

    return arr;
}