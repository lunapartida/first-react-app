export const getMovieByName = async (movieName) => {
  const result = await fetch();

  const movie = await result.json();
  console.log(movie);
};

getMovieByName("napoleon-dynamite");
