const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

function changeSize(event) {
    event.preventDefault();
    book.querySelector('.font-size_active').classList.remove('font-size_active');
    book.classList.remove('book_fs-small')
    book.classList.remove('book_fs-big')
    this.classList.add('font-size_active');
    if (this.dataset.size) {
        let size = this.dataset.size;
        if (size == 'big') {
            book.classList.add('book_fs-big');
        } else if (size == 'small') {
            book.classList.add('book_fs-small');
        }
    }
}

fontSize.forEach(size => size.addEventListener('click', changeSize));
