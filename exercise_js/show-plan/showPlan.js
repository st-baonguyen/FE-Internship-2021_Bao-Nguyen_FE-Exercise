const arrInfo = [
  {
    header: "Basic",
    title: "$10 / month",
    users: "10 users included",
    storage: "2 GB of storage",
    support: "Email support",
    help: "Help center access",
    btn: "Get Started",
  },
  {
    header: "Pro",
    title: "$10 / month",
    users: "100 users included",
    storage: "20 GB of storage",
    support: "Priority email support",
    help: "Help center access",
    btn: "Buy Now",
  },
];

const ul = document.createElement("ul");
arrInfo.forEach((pack) => {
  const li = document.createElement("li");
  li.classList.add("list-package");

  const divPackage = document.createElement("div");
  divPackage.classList.add("package");

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
  help.innerText = pack.help;

  listBody.appendChild(h4);
  listBody.appendChild(users);
  listBody.appendChild(storage);
  listBody.appendChild(support);
  listBody.appendChild(help);

  const a = document.createElement("a");
  const attr = document.createAttribute("href");
  attr.value = "#";
  a.setAttributeNode(attr);
  a.classList.add("package-link");
  a.innerText = pack.btn;

  divPackage.appendChild(h3);
  divPackage.appendChild(listBody);
  divPackage.appendChild(a);

  li.appendChild(divPackage);
  ul.appendChild(li);
});
// console.log(document.querySelectorAll("a")[0])
ul.classList.add("list-group");
document.querySelector("body").appendChild(ul);
const hover = document.querySelectorAll(".package-link")[1];
hover.classList.add("hover");
