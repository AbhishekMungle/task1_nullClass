document.addEventListener("DOMContentLoaded", function () {
    const profileInput = document.getElementById("profile-input");
    const profilePicImg = document.getElementById("profile-pic-img");
    const usernameInput = document.getElementById("username-input");
    const usernameDisplay = document.getElementById("username-display");
    const watchlistInput = document.getElementById("watchlist-input");
    const addWatchlistBtn = document.getElementById("add-watchlist");
    const watchlist = document.getElementById("watchlist");
    const ratedMovieInput = document.getElementById("rated-movie-input");
    const movieRating = document.getElementById("movie-rating");
    const addRatedMovieBtn = document.getElementById("add-rated-movie");
    const ratedMovies = document.getElementById("rated-movies");
    const submitBtn = document.getElementById("submit-btn");
    const message = document.getElementById("message");

    // Profile Picture Upload
    profileInput.addEventListener("change", function () {
        const file = profileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicImg.src = e.target.result;
                profilePicImg.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });


    usernameInput.addEventListener("input", function () {
        usernameDisplay.textContent = usernameInput.value || "Your Name";
    });

    // Add Movie to Watchlist
    addWatchlistBtn.addEventListener("click", function () {
        const movieName = watchlistInput.value.trim();
        if (movieName !== "") {
            const listItem = document.createElement("div");
            listItem.classList.add("movie-card");
            listItem.textContent = movieName;
            watchlist.appendChild(listItem);
            watchlistInput.value = ""; 
        }
    });

    // Add Rated Movie
    addRatedMovieBtn.addEventListener("click", function () {
        const movieName = ratedMovieInput.value.trim();
        const rating = movieRating.value;
        if (movieName !== "") {
            const listItem = document.createElement("div");
            listItem.classList.add("movie-card");
            listItem.innerHTML = `${movieName} <span>${rating}</span>`;
            ratedMovies.appendChild(listItem);
            ratedMovieInput.value = "";
        }
    });

    // Submit Button Click - Show Success Message
    submitBtn.addEventListener("click", function () {
        if (profilePicImg.src && usernameInput.value.trim() !== "") {
            message.textContent = "File uploaded successfully!";
            message.style.display = "block";
        } else {
            message.textContent = "Please upload a photo and enter a name.";
            message.style.display = "block";
            message.style.color = "red";
        }
    });
});
