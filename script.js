// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('red');
});

// Page flipping
const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

function updateBook() {
    book.style.transform = `translateX(-${currentPage * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateBook();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
    }
});
