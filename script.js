// const searchInput = document.getElementById('search-input');
// const prefectureFilter = document.getElementById('prefecture-filter');
// const typeFilter = document.getElementById('type-filter');

const filterOptions = document.querySelectorAll('.filter-option');

filterOptions.forEach(option => {

    option.addEventListener('click',() => {

        option.classList.toggle('active');

    });

});

const prefectureOptions = document.querySelectorAll(
    '.filter-option[data-filter="prefecture"]'
);

const cards = document.querySelectorAll('.searchable');

const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {

    const selectedPrefecture = document.querySelector(
        '.filter-option[data-filter="prefecture"].active'
    );

    if (selectedPrefecture) {
        const prefecture = selectedPrefecture.dataset.value;

        cards.forEach(card => {
            const cardPrefecture = card.dataset.prefecture;

            if (cardPrefecture === prefecture) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

});