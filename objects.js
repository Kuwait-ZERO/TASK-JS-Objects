/**
 * createBook
 *
 * - receives data about the book
 * - returns an object created using curly braces {}
 * that includes the following format:
 *
 * - title: "JavaScript: The Definitive Guide"
 * - author: "David Flanagan"
 * - publishedYear: 2020
 * - genre: "Programming"
 */
function createBook(title, author, publishedYear, genre) {
  const book = {
    title: title, // Assign the title parameter to the title property
    author: author, // Assign the author parameter to the author property
    publishedYear: publishedYear, // Assign the publishedYear parameter to the publishedYear property
    genre: genre, // Assign the genre parameter to the genre property
  };

  // Return the created book object
  return book; // Returns the book object
}

// Create a book object by calling createBook with values
const book = createBook(
  "JavaScript: The Definitive Guide",
  "David Flanagan",
  2020,
  "Programming"
);

/**
 * printBookTitleAndYear
 *
 * - receives a book object (just like the one created by `createBook`)
 * - returns the book’s title with its publish year separated by a space.
 *
 * Access the book title using dot-notation, and access the publish year using bracket-notation.
 */
function printBookTitleAndYear(book) {
  // am using dot notation to access the title property and bracket notation for publishedYear
  return `${book.title} ${book["publishedYear"]}`; // Return title and year as a string
}

/**
 * addPageCount
 *
 * - receives a book object
 * - received a pageCount
 * - returns the book object with a new `pageCount` property
 */
function addPageCount(book, pageCount) {
  // Add a new property pageCount to the book object
  book.pageCount = pageCount; // Set the pageCount property
  return book; // Return the updated book object
}

/**
 * addISBN
 *
 * - receives a book object
 * - receives an ISBN
 *
 * - returns the book object with a new `ISBN` property
 */
function addISBN(book, ISBN) {
  // Add a new property ISBN to the book object
  book.ISBN = ISBN; // Set the ISBN property
  return book; // Return the updated book object
}

/**
 * updatePublishedYear
 *
 * - receives a book object
 * - received newYear, the new publishing year
 *
 * - returns the book object with the `publishedYear` updates
 */
function updatePublishedYear(book, newYear) {
  // Update the publishedYear property of the book object
  book.publishedYear = newYear; // Change the publishedYear to newYear
  return book; // Return the updated book object
}

/**
 * addSecondAuthor
 *
 * - receives a book object
 * - receives an additional author
 *
 * - returns the book object with the `author` property changed to an array with BOTH authors
 */
function addSecondAuthor(book, additionalAuthor) {
  // Change the author property to an array with the existing and additional author
  book.author = [book.author, additionalAuthor]; // Create an array with both authors
  return book; // Return the updated book object
}

/**
 * 🌶️🌶️🌶️ addReview
 *
 * - receives a book object which MIGHT have a reviews property
 * - receives a reviewer
 * - receives a comment
 *
 * Create a new review object made up of a `reviewer` and `comment`
 *  and add it to the book's reviews array
 *
 * - returns the book object with the new review included in the reviews array
 */
function addReview(book, reviewer, comment) {
  // Initialize the reviews array if it doesn't exist
  if (!book.reviews) {
    book.reviews = []; // Create an empty reviews array if it doesn't exist
  }

  // Create a new review object
  const review = {
    reviewer: reviewer, // Set the reviewer property
    comment: comment, // Set the comment property
  };

  // Add the new review to the reviews array
  book.reviews.push(review); // Push the new review into the reviews array

  return book;
}

module.exports = {
  createBook,
  printBookTitleAndYear,
  addPageCount,
  addISBN,
  updatePublishedYear,
  addSecondAuthor,
  addReview,
};
