export const getMovieByName = async (movieName) => {
  const result = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=10afb4be`
  );

  const movie = await result.json();
  console.log(movie);
};

getMovieByName("napoleon-dynamite");
