const movies = [
    {
        name: "O Filme 1",
        image: "https://br.web.img3.acsta.net/pictures/23/07/21/20/50/4820227.jpg",
        date: "25 de Outubro, 2023",
        inTheaters: true,
        releaseDate: "10 de Outubro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 2",
        image: "https://br.web.img3.acsta.net/pictures/23/05/26/17/47/1900372.jpg",
        date: "28 de Outubro, 2023",
        inTheaters: true,
        releaseDate: "15 de Setembro, 2023",
        price: 10.99,
        availableTickets: 100
    }
];

const movieList = document.getElementById("movie-list");

movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const image = document.createElement("img");
    image.src = movie.image;
    image.alt = movie.name;
    image.classList.add("movie-image");

    const movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-details");

    const name = document.createElement("p");
    name.textContent = movie.name;

    const date = document.createElement("p");
    date.textContent = "Data: " + movie.date;

    const price = document.createElement("p");
    price.textContent = "Preço do Ticket: $" + movie.price;

    const availableTickets = document.createElement("p");
    availableTickets.textContent = "Tickets Disponíveis: " + movie.availableTickets;

    if (movie.inTheaters) {
        const releaseDate = document.createElement("p");
        releaseDate.textContent = "Data de Lançamento: " + movie.releaseDate;
        movieDetails.appendChild(releaseDate);
    }

    const buyButton = document.createElement("button");
    buyButton.textContent = "Comprar Ingresso";

    buyButton.addEventListener("click", () => {
        // Aqui você pode adicionar a lógica para comprar ingressos, se necessário.
        alert("Ingresso comprado para " + movie.name);
    });

    movieDetails.appendChild(name);
    movieDetails.appendChild(date);
    movieDetails.appendChild(price);
    movieDetails.appendChild(availableTickets);
    movieDetails.appendChild(buyButton);

    movieCard.appendChild(image);
    movieCard.appendChild(movieDetails);

    movieList.appendChild(movieCard);
});
