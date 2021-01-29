import { findById } from '../utils.js';
import concepts from '../data.js';
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');
const resultsSpan = document.querySelector('#results-span')
const backToTests = document.querySelector('button')

const params = new URLSearchParams(window.location.search);

const conceptId = params.get('id');

const concept = findById(concepts, conceptId);

console.log(concept, conceptId)

h1.textContent = concept.title;
p.textContent = concept.description;
img.src = `../assets/${concept.image}`;

for (let choice of concept.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);
}

const button = document.createElement('button')

button.textContent = 'submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectionId = formData.get('choices');

    const choice = findById(concept.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));
     
    user.draftPosition += choice.draftPosition;
    user.signingBonus += choice.signingBonus;
    user.completed[conceptId] = true;
    resultsSpan.textContent = choice.result;

    localStorage.setItem('USER', JSON.stringify(user));

   


});

backToTests.addEventListener('click', () => {

    window.location = '../concepts'

});

//window.location = '../concepts'