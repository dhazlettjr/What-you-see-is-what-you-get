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

//create DOM elements for each object.
// I will creat elements and text nodes, then append to the propper tags
// the text nodes will bring in the object information.

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

//append the cards to the container and the data to the cards.

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

  



let article = document.getElementsByClassName("people-container");
let inputField = document.getElementById("input-field");
let card;

//create an EL to change what is in the BIO section. cannot figure out how to bind this to each individual card.
inputField.addEventListener("input", function(){
  bioEntry.innerHTML = inputField.value;
});

//create another EL to switch to input field when any element is clicked
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

// create EL to clear what is in the input field when enter is clicked
inputField.addEventListener("keypress", function(event) {
  let key = event.which || event.keycode;
  if (key ===13) {
      inputField.value = "";
      console.log("it works");
      };
  }
);
}
