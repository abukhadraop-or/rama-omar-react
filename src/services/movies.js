const apiLink = 'https://api.themoviedb.org/3/discover';
const apiKey = 'd6566c2bb246801ddff14c1d50aa232e';

/**
 * Fetch the movies api link.
 *
 * @param {string} sortTypeMain the sorting type
 * @param {number} pageNum the page number to be fetched
 *
 * @return {Promise}
 */
export async function fetchMovies(sortTypeMain, pageNum) {
  const response = await fetch(
    `${apiLink}/movie?api_key=${apiKey}&language=en-US&sort_by=${sortTypeMain}&include_adult=false&include_video=false&page=${pageNum}`,
  );
  return response.json();
}

export default fetchMovies;
