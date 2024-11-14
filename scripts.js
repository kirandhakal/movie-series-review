let movies = [];
let series = [];

function addItem() {
  const title = document.getElementById('title').value.trim();
  const rating = document.getElementById('rating').value.trim();
  const category = document.getElementById('category').value;

  if (title && rating && !isNaN(rating) && rating >= 1 && rating <= 10) {
    const item = { title, rating };

    if (category === "movie") {
      movies.push(item);
      displayMovies();
    } else if (category === "series") {
      series.push(item);
      displaySeries();
    }

    document.getElementById('title').value = '';
    document.getElementById('rating').value = '';
  } else {
    alert("Please enter a valid title and rating (1-10).");
  }
}

function displayMovies() {
  const movieList = document.getElementById('movieList');
  movieList.innerHTML = '';

  movies.forEach((movie, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${movie.title} - Rating: ${movie.rating}/10`;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Cancel';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => deleteItem(index, 'movie');  // Delete item when clicked

    listItem.appendChild(deleteButton);
    movieList.appendChild(listItem);
  });
}

function displaySeries() {
  const seriesList = document.getElementById('seriesList');
  seriesList.innerHTML = '';

  series.forEach((show, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${show.title} - Rating: ${show.rating}/10`;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Cancel';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => deleteItem(index, 'series');  // Delete item when clicked

    listItem.appendChild(deleteButton);
    seriesList.appendChild(listItem);
  });
}

// Delete item function
function deleteItem(index, category) {
  if (category === 'movie') {
    movies.splice(index, 1);  // Remove movie from movies array
    displayMovies();
  } else if (category === 'series') {
    series.splice(index, 1);  // Remove series from series array
    displaySeries();
  }
}

// Clear function to reset the lists
function clearItems() {
  movies = [];
  series = [];
  displayMovies();
  displaySeries();
}
