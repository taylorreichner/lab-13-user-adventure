
import conceptData from '../data.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllTests = true;

for (let concept of conceptData) {
    if (!user.completed[concept.id]) {
        completedAllTests = false;
        
    }

}
if (user, completedAllTests) {
    window.location = '../results';
}




for (let concept of conceptData) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = concept.title;
    a.href = `../testing/?id=${concept.id}`;

    li.append(a);
    ul.append(li);
}