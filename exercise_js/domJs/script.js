const arrInfo = [
  {
    header: "Basic",
    title: "$10 / month",
    users: "10 users included",
    storage: "2 GB of storage",
    support: "Email support",
    help: "Help center access",
    btn: {
      text: "Get Started",
      type: "outline"
    }
  },
  {
    header: "Pro",
    title: "$10 / month",
    users: "100 users included",
    storage: "20 GB of storage",
    support: "Priority email support",
    help: "Help center access",
    btn: {
      text: "Buy Now",
      type: "primary"
    }
  },
];

var convertHTML = arrInfo.map((element) => 
   `
    <li class="list-package">
      <div class="package">
        <h3 class="package-header">${element.header}</h3>
        <div class="package-body">
          <h4 class="package-title">${element.title}</h4>
          <p>${element.user}</p>
          <p>${element.storage}</p>
          <p>${element.support}</p>
          <p>${element.help}</p>
        </div>
        <a href="#" class="package-link ${element.btn.type}">${element.btn.text}</a>      
      </div>
    </li>
  `
);

document.querySelector('.list-group').innerHTML = convertHTML;
