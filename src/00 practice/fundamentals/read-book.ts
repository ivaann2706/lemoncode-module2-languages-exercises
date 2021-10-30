function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book && book.isRead ? true : false;
}

// Ejemplo:
interface Book {
  title: string;
  isRead: boolean;
}
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("*** Read Book ***");
console.log("books", books);
console.log(
  'isBookRead(books, "Devastación"):',
  isBookRead(books, "Devastación")
); // true
console.log(
  'isBookRead(books, "Canción de hielo y fuego"):',
  isBookRead(books, "Canción de hielo y fuego")
); // false
console.log(
  'isBookRead(books, "Los Pilares de la Tierra"):',
  isBookRead(books, "Los Pilares de la Tierra")
); // false
