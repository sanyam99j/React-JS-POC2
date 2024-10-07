const userGrid = document.getElementById('userGrid');

const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const displayUsers = (users) => {
    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            // <p><strong>Website:</strong> ${user.address.street}</p>
        `;

        userGrid.appendChild(card);
    });
};

fetchUsers();
