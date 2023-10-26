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
    },
    {
        name: "O Filme 3",
        image: "URL_da_imagem_3.jpg",
        date: "10 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "25 de Outubro, 2023",
        price: 11.99,
        availableTickets: 120
    },
    {
        name: "O Filme 4",
        image: "URL_da_imagem_4.jpg",
        date: "15 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "1 de Novembro, 2023",
        price: 9.99,
        availableTickets: 90
    },
    {
        name: "O Filme 5",
        image: "URL_da_imagem_5.jpg",
        date: "20 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "5 de Novembro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 6",
        image: "URL_da_imagem_6.jpg",
        date: "25 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "10 de Novembro, 2023",
        price: 10.99,
        availableTickets: 100
    },
    {
        name: "O Filme 7",
        image: "URL_da_imagem_7.jpg",
        date: "30 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "15 de Novembro, 2023",
        price: 11.99,
        availableTickets: 120
    },
    {
        name: "O Filme 8",
        image: "URL_da_imagem_8.jpg",
        date: "5 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "20 de Novembro, 2023",
        price: 9.99,
        availableTickets: 90
    },
    {
        name: "O Filme 9",
        image: "URL_da_imagem_9.jpg",
        date: "10 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "25 de Novembro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 10",
        image: "URL_da_imagem_10.jpg",
        date: "15 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "1 de Dezembro, 2023",
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
