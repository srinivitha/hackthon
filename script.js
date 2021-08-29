async function getusers() {
    const data = await fetch(
      "https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane&name[]=jack&name[]=james&name[]=praveen&name[]=peter&name[]=david&name[]=viki&name[]=don",{
        Method:"GET"
      });
    const users = await data.json();
    console.log(users);
    users.forEach((user) => createUser(user));
  }
  getusers();
  
  function create({ name, country, country_id, probability }) {
    const info = document.createElement("div");
    info.setAttribute("class", "container");
    info.innerHTML = `<div class="user-container">
    <div class="details">
            <h3> ${name}</h3>
            <p>${country}</p>
            <p>${(country_id, probability)}</p>
                       </div> 
                       </div>
     `;
    document.querySelector(".user-list").append(info);
  }
  