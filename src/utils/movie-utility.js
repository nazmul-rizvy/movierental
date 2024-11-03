function getImageUrl(movieName) {
  return new URL(`../assets/movie-covers/${movieName}`, import.meta.url).href;
}

export { getImageUrl };
