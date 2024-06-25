document.addEventListener('DOMContentLoaded', function () {
    let fetchButton = document.getElementById('fetchButton');
    let filterButton = document.getElementById('filterButton');
    let cardBox = document.getElementById('cards');
    let usersData = [];

    fetchButton.addEventListener('click', function () {
        let url = 'https://dummyjson.com/users'

        fetch(url)
            .then((response) => response.json())
            .then(data => {
                usersData = data.users;
                showData(usersData);

            })
            .catch(error => console.log(error));
    });
    filterButton.addEventListener('click', function () {
        let filteredData = usersData.filter(user => user.age < 38);
        showData(filteredData)
    });

    function showData(users) {
        cardBox.innerHTML = '';

        users.forEach(user => {
            let card = document.createElement('div');
            let name = document.createElement('p');
            let age = document.createElement('p');
            let address = document.createElement('p');

            name.innerHTML = `<span class ="info-label">Name:</span> <span class ="info-data">${user.firstName} ${user.lastName}</span>`;


            age.innerHTML = `<span class ="info-label">Age:</span> <span class ="info-data">${user.age}</span>`;

            let city = user.address?.city

            address.innerHTML = `<span class ="info-label">Age:</span> <span class ="info-data">${city}</span>`;

            card.classList.add('card');

            card.appendChild(name);
            card.appendChild(age);
            card.appendChild(address);

            cardBox.appendChild(card);

        });
    }
})
