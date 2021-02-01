import { scoreSigningBonus } from './signing-bonus.js';

import { draftMessage } from './messages.js';

const user = JSON.parse(localStorage.getItem('USER'));

const storyDisplay = document.getElementById('story-display');

const result = scoreSigningBonus(user.singingBonus);

if (result === 'poor') {
    draftMessage('poor').textContent;

}
else if (result === 'modest') {
    draftMessage('modest').textContent;
} 
if (result === 'rich') {
    draftMessage('rich').textContent;
};

const story = draftMessage;

storyDisplay.textContent = story;



