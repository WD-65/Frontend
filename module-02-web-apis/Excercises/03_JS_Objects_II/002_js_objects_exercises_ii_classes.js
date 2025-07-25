class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  }
}

/* ──────────────  Example usage  ────────────── */

const myBook = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);

console.log(myBook.summary());
// → Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281, Read: Yes
