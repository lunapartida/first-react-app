import {} from './services/movies';

export async function getMoviesByName() {
  const res = await fetch(
    'http://www.omdbapi.com/?apikey=9f69d263&t=spiderman'
  );
  const movies = await res.json();
  console.log(movies);
}
// getMoviesByName();

export async function getMoviesById() {
  const res = await fetch(
    'http://www.omdbapi.com/?apikey=9f69d263&i=tt0100669'
  );
  const movies = await res.json();
  console.log(movies);
}

// getMoviesById();




// export const getMovieByName = async (movieName) => {
//   const result = await fetch(
//     `http://www.omdbapi.com/?t=${movieName}&apikey=10afb4be`
//   );

//   const movie = await result.json();
//   console.log(movie);
// };

// getMovieByName("napoleon-dynamite");
