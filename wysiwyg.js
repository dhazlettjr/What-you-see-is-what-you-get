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
  let nameHeader = document.createElement("nameHeader");
  let titleHeader = document.createElement("titleHeader");
  let name = document.createTextNode(`${famousPeeps[i].name}`);
  let title = document.createTextNode(`${famousPeeps[i].title}`);
  // let article = document.getElementsByClassName("people-container");
  // let inputText = document.getElementsByClassName("input-text");


  famousCard.setAttribute("id", `person-${counter}`);
  console.log(`person-${counter}`);
  famousCard.setAttribute("class", "people-container");
  peopleContainer.appendChild(famousCard);
  famousCard.appendChild(section);
  famousCard.appendChild(footer);
  famousCard.appendChild(header);
  nameHeader.appendChild(name);
  titleHeader.appendChild(title);
  header.appendChild(nameHeader);
  header.appendChild(titleHeader);

  section.innerHTML = `<img src="${famousPeeps[i].image}">`;
}