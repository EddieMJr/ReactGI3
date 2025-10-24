import search from './utils/search.js';

const title = process.argv[2];

if (!title) {
  console.log('Please provide a movie title');
} else {
  search(title, (error, { movieId, title: movieTitle } = {}) => {
    if (error) {
      return console.log('Search error:', error);
    }

    // API Connection Test
    console.log(`Movie: "${movieTitle}" (ID: ${movieId})`);
  });
}

console.log(process.argv);