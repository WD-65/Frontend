const book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  isRead: true,
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${
      this.pages
    }, Read: ${this.isRead ? 'Yes' : 'No'}`;
  },
};

console.log(book.summary());
// Output: Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281, Read: Yes
