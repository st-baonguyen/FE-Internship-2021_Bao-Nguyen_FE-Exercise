const input = document.createElement("input");
const attrIp = document.createAttribute("placeholder");
attrIp.value = "Nhập tuổi";
input.setAttributeNode(attrIp);

const button = document.createElement("button");
const textBtn = document.createTextNode("Nhập tuổi");
button.appendChild(textBtn);

var p = document.createElement("p");
const attr = document.createAttribute("class");
attr.value = "txt-age";
p.setAttributeNode(attr);

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(p);

button.addEventListener("click", handleClick);

function handleClick(event) {
  const date = new Date();
  const year = document.querySelector("input").value;
  const age = date.getFullYear() - year;
  var text = document.createTextNode("Tuổi của bạn là: " + age);
  p.appendChild(text);
  console.log(date.getFullYear());
}
