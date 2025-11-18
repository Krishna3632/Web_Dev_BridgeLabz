class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) this.isIssued = true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("A", "X", "111"),
  new Book("B", "Y", "222"),
  new Book("C", "Z", "333", true)
];

const available = books.filter(b => !b.isIssued);
console.log("Available:", available);

function issueByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book && !book.isIssued) book.issueBook();
}

issueByISBN("111");
console.log(books);
