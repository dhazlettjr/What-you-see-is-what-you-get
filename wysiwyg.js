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



// var counter1 = 0;
// var output = document.getElementById("output");
// for (; counter < 5; counter++) {
//   // Give each person element a unique identifier
//   output.innerHTML += `<div class="people-container" id="person--${counter}"></div>`;
// }

// // Now containerEl will have elements in it
// var containerEL = document.getElementsByClassName("people-container");

// // Event listeners are created
// for (var i = 0; i < containerEl.length; i++) {
//   containerEl[i].addEventListener("click", function (event) {
//     // Logic to execute when the element is clicked
//   });
// };