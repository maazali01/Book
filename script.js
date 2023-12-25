function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
}

const booksCollection = [];

function addBook(title, author, ISBN) {
    const newBook = new Book(title, author, ISBN);
    booksCollection.push(newBook);
    console.log("Book added:", newBook);
    console.log("Updated collection:", booksCollection);
}


function removeBook(ISBN) {
    const indexToRemove = booksCollection.findIndex(book => book.ISBN === ISBN);
    if (indexToRemove !== -1) {
        const removedBook = booksCollection.splice(indexToRemove, 1)[0];

        console.log("Book removed:", removedBook);
        console.log("Updated collection:", booksCollection);
    } else {
        console.log("Book not found in the collection.");
    }
}

function addBook(title, author, ISBN) {
    const newBook = new Book(title, author, ISBN);
    booksCollection.push(newBook);

    updateBooksList();

}

function updateBooksList() {
    const booksListContainer = document.getElementById("books-list");

    booksListContainer.innerHTML = "";

    booksCollection.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.author} (ISBN: ${book.ISBN})`;
        booksListContainer.appendChild(listItem);
    });
}

document.getElementById("add-book-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const ISBN = document.getElementById("isbn").value;

    addBook(title, author, ISBN);

    event.target.reset();
});
