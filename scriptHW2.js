let movies = [
    {
        id: 01, //a unique identifier for this movie     
        title: "The Matrix Ressurections", //the title of this movie     
        director: "Lara Wachowski", //the name of the director of this movie    
        runtime: "2h 24m", //the runtime of this movie     
        release_year: 2021, //the year this movie was released     
        description: "The film is set 60 years after Revolutions, where Neo is living seemingly ordinary life as a game developer but struggles to make a distinction between fantasy and reality. From Neo's ordinary life he is saved from a new version of the Matrix by a group of rebels and a programmed version of Morpheus, where they fight a new enemay that holds Trinity captive.", //a description of this movie     
        poster_url: "https://m.media-amazon.com/images/M/MV5BMzdlYTAzZTYtZWRmNS00MjVjLTg4YTktNWRiZDUxNGI1NWZhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg", //a URL or file path to an image of the poster for this movie     
        cinema_number: 1, //the number of the cinema this movie will be showing in     
        ticket_price: 55, //the price of a single ticket for this movie     
        tickets_in_cart: 0, //the number of tickets that have been booked for this movie  
    },

    {
        id: 02, //a unique identifier for this movie     
        title: "Clueless", //the title of this movie     
        director: "Amy Hackerling", //the name of the director of this movie     
        runtime: "1h 37m", //the runtime of this movie     
        release_year: 1995, //the year this movie was released     
        description: "Cher, a high school student in Beverly Hills, must survive the ups and downs of adolescent life. Her external demeanor at first seems superficial, but rather it hides her wit, charm, and intelligence which help her to deal with relationships, friends, family, school, and the all-important teenage social life.", //a description of this movie     
        poster_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583577319l/799066._SY475_.jpg", //a URL or file path to an image of the poster for this movie     
        cinema_number: 2, //the number of the cinema this movie will be showing in     
        ticket_price: 11, //the price of a single ticket for this movie     
        tickets_in_cart: 0, //the number of tickets that have been booked for this movie
    },

    {
        id: 03, //a unique identifier for this movie     
        title: "Kung-Fu Panda 3", //the title of this movie     
        director: "Jennifer Yuh Nelson, Alessandro Carloni", //the name of the director of this movie     
        runtime: "1h 35m", //the runtime of this movie     
        release_year: 2016, //the year this movie was released     
        description: "When Po's long-lost panda father suddenly reappears, the reunited duo travels to a secret panda paradise to meet scores of hilarious new panda characters. But when the supernatural villain Kai begins to sweep across China defeating all the kung fu masters, Po must do the impossible-learn to train a village full of his fun-loving, clumsy brethren to become the ultimate band of Kung Fu Pandas.", //a description of this movie     
        poster_url: "https://upload.wikimedia.org/wikipedia/en/e/e6/Kung_Fu_Panda_3_poster.jpg", //a URL or file path to an image of the poster for this movie     
        cinema_number: 3, //the number of the cinema this movie will be showing in     
        ticket_price: 11, //the price of a single ticket for this movie     
        tickets_in_cart: 0, //the number of tickets that have been booked for this movie 
    },

    {
        id: 04, //a unique identifier for this movie     
        title: "Gaurdians of the Galaxy", //the title of this movie     
        director: "James Gunn", //the name of the director of this movie     
        runtime: "2h 2m", //the runtime of this movie     
        release_year: 2014, //the year this movie was released     
        description: "An action-packed, epic space adventure, Marvel's 'Gaurdians of the Galaxy',expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe.", //a description of this movie     
        poster_url: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03_0.jpg", //a URL or file path to an image of the poster for this movie     
        cinema_number: 4, //the number of the cinema this movie will be showing in     
        ticket_price: 25, //the price of a single ticket for this movie     
        tickets_in_cart: 0 //the number of tickets that have been booked for this movie
    }
];

//Stores selected movies
let cart = [];

// Append new node with to the parent node
// "parent" and "element are parameters"
function appendNode(parent, element) {
    parent.appendChild(element);
};


//Return the div element with the id of a container
function getDiv(cartTable) {
    return document.getElementById(cartTable);
};

//Create new node and return it
function createNode(node) {
    let element = document.createElement(node);
    return element;
};

// Display the booked movies in the Cart table
function displayMovies(movies, cartTable) {
    let movies_container = getDiv(cartTable);
    movies_container.innerHTML = '';

    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];

        let movie_node = createNode("td");
        movie_node.setAttribute("id", movie.id);

        if (movie.tickets_in_cart > 0) {
            movie_node.innerHTML = `${movie.title}
            <span id="cartIcon">${movie.tickets_in_cart}</span>`;
            appendNode(movies_container, movie_node);
        }
    }

    displayMovies(movies, "Movies");

}

function addOrRemoveMovies(action) {
    let conatainer = '';

    if (action == "Book Ticket") {
        container = getDiv("movies");

        takeAction(conatainer)
    }
    else if (action == "remove") {
        conatainer = getDiv("cart");

        takeAction(conatainer);
    }

    function takeAction(container) {
        conatainer.addEventListener("click", function (event) {
            let movie_id = event.target.id;

            if (movie_id !== "movies" && movie_id !== "cartIcon") {
                let movie_id = movies.filter(function (movie) {
                    return movie_id == movie_id;
                })
                let movie_in_cart = cart.filter(function (movie) {
                    return movie.id == movie.id;
                })[0];

                if(movie_in_cart == undefined){
                    cart.push(movie);
                }
                else if(action == "add"){
                    movie_in_cart.clickcount++;
                }
                else if (action == "remove"){
                    movie_in_cart.clickcount--;
                }

                console.log(cart);
                displayMovies(cart,"cartTable");
            };
        });
    };
}

addOrRemoveMovies('add');
addOrRemoveMovies('remove');

// Local storage
window.localStorage.setItem('movie')

// Get the modal
var modal = document.getElementById("tmrModal");

// Get the button that opens the modal
var btn = document.getElementById("tmrDetails");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Cart ticket count
if (tmrBooking.onclick) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    localStorage.clickcount = 1;
}
