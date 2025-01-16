Input:

An array of movie objects, each including a title, genre, and year of release, are sent into the software. The MovieList component's moviesData array contains definitions for these movie objects.

Process:

The MovieList component manages rendering and filtering using React's component-based methodology. Various genres from the movie list are constantly added to a dropdown menu. The handleGenreChange function filters the movies according to the user's selected genre. The complete list appears if "All Genres" is chosen.

Output:

The handleMovieClick function is triggered when a movie is clicked, displaying the title of the film in an alert. Filtered movie cards with their title, genre, and year of release are displayed by the application, which dynamically refreshes the output based on user interactions.
