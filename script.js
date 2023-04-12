const apiKey = '4aa9f79ed500d8d11567f6c111c85cd8';
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const moviesContainer = document.querySelector('#movies-container');

searchButton.addEventListener('click', () => {
	const query = searchInput.value;
	if (query) {
		searchMovies(query);
	}
});

async function searchMovies(query) {
	moviesContainer.innerHTML = '';

	const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
	const data = await response.json();
	const movies = data.results;

	movies.forEach(movie => {
		const movieCard = document.createElement('div');
		movieCard.classList.add('movie-card');
		movieCard.innerHTML = `
			<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
			<h2>${movie.title}</h2>
			<p>${movie.overview}</p>
		`;
		moviesContainer.appendChild(movieCard);
	});
}
