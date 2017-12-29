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

let container = document.getElementById("container");
let person = document.getElementsByTagName("header")[0];

function personSelect(item){
   container.style.border = " thick solid #0000FF";
    
}

person.addEventListener("click", function(){
    let clickPerson = event.target;
    
    personSelect(clickPerson);

});
