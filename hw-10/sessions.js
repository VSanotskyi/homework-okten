let counter1 = Number(localStorage.getItem("counter"));

for(let i = 1; i <= counter1; i += 1) {
    const p = document.createElement("p");
    p.innerText = `sessions: ${i}`;
    document.body.append(p);
}

