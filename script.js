



const bookGrid = document.getElementById('bodyElem')
const submitForm = document.getElementById('submitForm')
class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      pages = '0',
      isRead = false
    ) {
      this.title = title
      this.author = author
      this.pages = pages
      this.isRead = isRead
    }
  }
  
class Library {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
    this.books.push(newBook)
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }
  getBook(title) {
    return this.books.find((book) => book.title === title)
  }

}

const library = new Library()

// function addBook() {
//   e.preventDefault();
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('author').value;
//   const pages = document.getElementById('pageNum').value;
//   const hasRead = document.getElementById('hasRead').checked;
//   const testBook = new Book(title, author, pages, hasRead);
//   library.addBook(testBook);
//   updateGrid();
// }


const addBook = (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pageNum').value;
  const hasRead = document.getElementById('hasRead').checked;
  const testBook = new Book(title, author, pages, hasRead);
  library.addBook(testBook);
  updateGrid();
}

submitForm.addEventListener('submit', function(e){
  e.preventDefault();
  addBook(e)
  console.log("hello")
} )

function myFunction (){
  console.log("Hello")
}

const toggleRead = (e) => {
  console.log(e.target);
}

//TODO: change this to a const function
//TODO: Then see if button click will work in this fashion.
// function updateGrid(){
//   bookGrid.innerHTML = '';
//   library.books.map((item) => {
//     let box = document.createElement('div');
//     let randButton = document.createElement('button')
//     let author = document.createElement('div');
//     let title = document.createElement('div');
//     let pages = document.createElement('div');
//     let nop = document.createElement('div');
//     author.setAttribute("id", "bookChildElem");
//     title.setAttribute("id", "bookChildElem");
//     nop.setAttribute("id", "bookChildElem");
//     pages.setAttribute("id", "bookChildElem");
//     author.textContent += item.author;
//     title.textContent +=item.title;
//     nop.textContent +=item.isRead;
//     pages.textContent +=item.pages;
//     randButton.innerHTML += "Button";
//     randButton.onclick = myFunction;

//     box.appendChild(author);
//     box.appendChild(title);
//     box.appendChild(nop);
//     box.appendChild(pages);
//     pages.appendChild(randButton);
//     bookGrid.appendChild(box);
//   })
// }

const updateGrid = () => {
  gridReset();
  for(let book of library.books) {
    createBookDiv(book);
  }
}

const gridReset = () => {
  bookGrid.innerHTML = '';
}


const removeBook = (e) => {
  // const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
  //   '"',
  //   ''
  // )
  const title = e.target.parentNode.parentNode.firstChild.innerHTML;
  console.log(title);
  library.removeBook(title);
  console.log(library)
  updateGrid();
}

const createBookDiv = (item) => {
  let box = document.createElement('div');
  let randButton = document.createElement('button')
  let author = document.createElement('div');
  let title = document.createElement('div');
  let pages = document.createElement('div');
  let nop = document.createElement('div');
  author.setAttribute("id", "bookChildElem");
  title.setAttribute("id", "bookChildElem");
  nop.setAttribute("id", "bookChildElem");
  pages.setAttribute("id", "bookChildElem");
  author.textContent += item.author;
  title.textContent +=item.title;
  nop.textContent +=item.isRead;
  pages.textContent +=item.pages;
  randButton.innerHTML += "Button";
  randButton.onclick = removeBook;
  box.appendChild(title);
  box.appendChild(author);
  box.appendChild(nop);
  box.appendChild(pages);
  pages.appendChild(randButton);
  bookGrid.appendChild(box);
}

