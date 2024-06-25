document.addEventListener('DOMContentLoaded', function() {
    let fetchButton = document.getElementById('fetchButton');
    let filterButton = document.getElementById('filterButton');
    let cardsContainer = document.getElementById('cards');
    let usersData = [];

    fetchButton.addEventListener('click', function() {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                usersData = data.users;
                displayData(usersData);
            })
            .catch(error => console.error('Ошибка:', error));
    });

    filterButton.addEventListener('click', function() {
        let filteredData = usersData.filter(user => user.age < 30);
        displayData(filteredData);
    });

    function displayData(users) {
        // Очистка предыдущей информации
        cardsContainer.innerHTML = '';

        users.forEach(user => {
            let card = document.createElement('div');
            let name = document.createElement('p');
            let age = document.createElement('p');
            let address = document.createElement('p');

            name.innerHTML = `<span class="info-label">Имя:</span> <span class="info-data">${user.firstName} ${user.lastName}</span>`;
            age.innerHTML = `<span class="info-label">Возраст:</span> <span class="info-data">${user.age}</span>`;

            let city = user.address?.city || 'Не указано';
           
            address.innerHTML = `<span class="info-label">Адрес:</span> <span class="info-data">${city}</span>`;

            card.classList.add('card');

            card.appendChild(name);
            card.appendChild(age);
            card.appendChild(address);

            cardsContainer.appendChild(card);
        });
    }
});
