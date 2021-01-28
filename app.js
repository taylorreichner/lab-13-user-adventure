const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        style: formData.get('player-style'),
        draftPosition: 255,
        signingBonus: 200000,
        completed: {},
    };
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './results/index.html';

});