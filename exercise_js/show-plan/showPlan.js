const arr = [
  {
    header: "Basic",
    title: "10$/month",
    users: 10,
    storage: "2GB",
    support: "Email",
    help: "Help center access",
  },
  {
    header: "Pro",
    title: "10$/month",
    users: 10,
    storage: "2GB",
    support: "Email",
    help: "Help center access",
  },
];

const ul = document.createElement("ul");
arr.forEach((pack) => {
  const li = document.createElement("li");
  li.classList.add("list-package");
  const div = document.createElement("div");
  div.classList.add("package");
  const h3 = document.createElement("h3");
  h3.classList.add("package-header");
  h3.innerText = pack.header;
  const listBody = document.createElement("div");
  listBody.classList.add("package-body");
  const h4 = document.createElement("h4");
  h4.classList.add("package-title");
  h4.innerText = pack.title;
  const users = document.createElement("p");
  const storage = document.createElement("p");
  const support = document.createElement("p");
  const help = document.createElement("p");
  users.innerText = pack.users;
  storage.innerText = pack.storage;
  support.innerText = pack.support;
  help.innerText = pack.support;
  listBody.appendChild(h4);
  listBody.appendChild(users);
  listBody.appendChild(storage);
  listBody.appendChild(support);
  listBody.appendChild(help);
  div.appendChild(h3);
  div.appendChild(listBody);
  li.appendChild(div);
  ul.appendChild(li);
  li.innerHTML += `  <a href="#" class="package-link">Get Started</a>`;
});

document.querySelector("body").appendChild(ul);
ul.classList.add("list-group");
