let famousPeeps = [
    {
    title: "Guitar legend",
    name: "Kirk Hammett",
    bio: "Best guitar player in the world",
    image: "http://www.mesaboogie.com/media/Artists/Kirk%20Hammett/Kirk-Hammett-400.jpg",
    lifespan: {
      birth: 1975,
      death: 2040
    }
  },

   {
    title: "Mac Master",
    name: "Steve Jobs",
    bio: "The Crazy One",
    image: "https://pbs.twimg.com/profile_images/36850962/steve4_400x400.jpg",
    lifespan: {
      birth: 1955,
      death: 2011
    }
   },

   {

    title: "Savior",
    name: "Jesus Christ",
    bio: "Son of GOD",
    image: "https://pbs.twimg.com/profile_images/1207702065/jesus2_400x400.jpg",
    lifespan: {
    birth: 1,
    death: 4
    }
   },

   {

    title: "legend",
    name: "Kirk Hammett",
    bio: "Best guitar player in the world",
    image: "http://www.mesaboogie.com/media/Artists/Kirk%20Hammett/Kirk-Hammett-400.jpg",
    lifespan: {
    birth: 1975,
    death: 2040
    }
   },

   {

    title: "legend",
    name: "Kirk Hammett",
    bio: "Best guitar player in the world",
    image: "http://www.mesaboogie.com/media/Artists/Kirk%20Hammett/Kirk-Hammett-400.jpg",
    lifespan: {
    birth: 1975,
    death: 2040
    }
   }
]

let counter = 0;
let peopleContainer = document.getElementById("people-container");

for (let i = 0; i < famousPeeps.length; i++) {
  let famousCard = document.createElement("article");
  let header = document.createElement("header");
  let section = document.createElement("section");
  let footer = document.createElement("footer");
  let nameHeader = document.createElement("h2");
  let titleHeader = document.createElement("h3");
  let name = document.createTextNode(`${famousPeeps[i].name}`);
  let title = document.createTextNode(`${famousPeeps[i].title}`);
  let bioText = document.createTextNode(`${famousPeeps[i].bio}`);
  let bioEntry = document.createElement("p");
  let footerEntry = document.createElement("p");
  let footerText = document.createTextNode(`${famousPeeps[i].lifespan.birth} - ${famousPeeps[i].lifespan.death}`);

  // let article = document.getElementsByClassName("people-container");
  // let inputText = document.getElementsByClassName("input-text");

  section.innerHTML = `<img src="${famousPeeps[i].image}">`;

  famousCard.setAttribute("id", `person-${counter}`);
  console.log(`person-${counter}`);
  famousCard.setAttribute("class", "people-container");
  peopleContainer.appendChild(famousCard);
  peopleContainer.appendChild(section);
  peopleContainer.appendChild(footer);
  famousCard.appendChild(header);
  nameHeader.appendChild(name);
  titleHeader.appendChild(title);
  header.appendChild(nameHeader);
  header.appendChild(titleHeader);
  famousCard.appendChild(bioEntry);
  bioEntry.appendChild(bioText);
  footer.appendChild(footerText);
  famousCard.appendChild(footer);
}


let article = document.getElementsByClassName("people-container");
let inputField = document.getElementById("input-field");
let card;

for ( let i = 0; i<article.length; i++) {
  article[i].addEventListener("click", function (){
    inputField.value = "";
    event.target.style.border ="4px dotted black";
    // nameHeader.style.border = "thick dotted #0000FF";
    // titleHeader.style.border = "thick dotted #0000FF";
    // bioEntry.style.border = "thick dotted #0000FF";
    // footer.style.border = "thick dotted #0000FF";
    inputField.focus();
    card = event.currentTarget;
  })
}



inputField.addEventListener("keypress", (e)=> {
  const key = e.which || e.keyCode;
  if (key === 13){
      inputField.value = "";
      console.log("keypress running");
      };
  }
);