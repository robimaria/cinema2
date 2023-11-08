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
        image: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/five-nights-at-freddys-o-pesadelo-sem-fim.jpg",
        date: "10 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "25 de Outubro, 2023",
        price: 11.99,
        availableTickets: 120
    },
    {
        name: "O Filme 4",
        image: "https://br.web.img2.acsta.net/medias/nmedia/18/97/04/22/20504502.jpg",
        date: "15 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "1 de Novembro, 2023",
        price: 9.99,
        availableTickets: 90
    },
    {
        name: "O Filme 5",
        image: "https://m.media-amazon.com/images/M/MV5BMjVkZjM4MWYtMTg2Ny00NDBkLTk2MTktNTFiYTJiNmJhY2ZmXkEyXkFqcGdeQXVyMjAyNDg4NzI@._V1_.jpg",
        date: "20 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "5 de Novembro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 6",
        image: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/elementos.jpg?1669850526",
        date: "25 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "10 de Novembro, 2023",
        price: 10.99,
        availableTickets: 100
    },
    {
        name: "O Filme 7",
        image: "https://www.claquete.com.br/fotos/filmes/poster/14281_grande.jpg",
        date: "30 de Novembro, 2023",
        inTheaters: true,
        releaseDate: "15 de Novembro, 2023",
        price: 11.99,
        availableTickets: 120
    },
    {
        name: "O Filme 8",
        image: "https://br.web.img3.acsta.net/c_310_420/pictures/23/06/14/20/35/4946834.png",
        date: "5 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "20 de Novembro, 2023",
        price: 9.99,
        availableTickets: 90
    },
    {
        name: "O Filme 9",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRSQWIxUrgVhiSg_aihcx16AZ9UxaaHRgSQ&usqp=CAU",
        date: "10 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "25 de Novembro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 10",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnhTcWbEgmCUlfsAD_8gLRJwN0i5fW0eo6g&usqp=CAU",
        date: "15 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "1 de Dezembro, 2023",
        price: 10.99,
        availableTickets: 100
    },
    {
        name: "O Filme 11",
        image: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/12/aranhaverso_2_poster__2220u0-760x950.jpg",
        date: "20 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "5 de Dezembro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 12",
        image: "https://upload.wikimedia.org/wikipedia/pt/8/8d/The_Wolf_of_Wall_Street.jpg",
        date: "25 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "10 de Dezembro, 2023",
        price: 10.99,
        availableTickets: 100
    },
    {
        name: "O Filme 13",
        image: "https://br.web.img3.acsta.net/c_310_420/pictures/21/04/07/21/13/5564614.jpg",
        date: "30 de Dezembro, 2023",
        inTheaters: true,
        releaseDate: "15 de Dezembro, 2023",
        price: 11.99,
        availableTickets: 120
    },
    {
        name: "O Filme 14",
        image: "https://br.web.img2.acsta.net/pictures/21/12/06/21/17/3973076.jpg",
        date: "5 de Janeiro, 2024",
        inTheaters: true,
        releaseDate: "20 de Dezembro, 2023",
        price: 9.99,
        availableTickets: 90
    },
    {
        name: "O Filme 15",
        image: "https://br.web.img3.acsta.net/pictures/14/05/27/15/43/549754.jpg",
        date: "10 de Janeiro, 2024",
        inTheaters: true,
        releaseDate: "25 de Dezembro, 2023",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 16",
        image: "https://br.web.img3.acsta.net/c_310_420/pictures/14/06/12/15/31/228587.jpg",
        date: "15 de Janeiro, 2024",
        inTheaters: true,
        releaseDate: "1 de Janeiro, 2024",
        price: 10.99,
        availableTickets: 100
    },
    {
        name: "O Filme 17",
        image: "https://upload.wikimedia.org/wikipedia/pt/6/66/Cherry_2021.jpg",
        date: "20 de Janeiro, 2024",
        inTheaters: true,
        releaseDate: "5 de Janeiro, 2024",
        price: 11.99,
        availableTickets: 120
    },
    {
        name: "O Filme 18",
        image: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
        date: "25 de Janeiro, 2024",
        inTheaters: true,
        releaseDate: "10 de Janeiro, 2024",
        price: 9.99,
        availableTickets: 90
    },
    {
        name: "O Filme 19",
        image: "https://upload.wikimedia.org/wikipedia/pt/a/af/Fantastic_mr_fox.jpg",
        date: "30 de Janeiro, 2024",
        inTheaters: true,
        releaseDate: "15 de Janeiro, 2024",
        price: 12.99,
        availableTickets: 150
    },
    {
        name: "O Filme 20",
        image: "https://br.web.img2.acsta.net/pictures/21/10/05/10/14/4942486.jpg",
        date: "5 de Fevereiro, 2024",
        inTheaters: true,
        releaseDate: "20 de Janeiro, 2024",
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
