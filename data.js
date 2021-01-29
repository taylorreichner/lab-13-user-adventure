


const coverThree = {
    id: 'coverThree',
    title: 'how to attack cover 3 test',
    image: 'cover3.PNG',
    description: `
    Your coach calls a flood concept and assuming you know the defence is playing cover 3 
    what defender are you reading and what is your route progression depending on that defenders
    reaction to the play?
    `,
    
    choices: [{

        id: 'deep',
        description: 
    `Number 7 is the defender to read, i would wait for green and blue to make cuts. If number 7 bails
    on the green corner then i would throw the blue deep out`,
        result: 
    `Number 7 will always bail and cover the green out. Number 6 is the correct read, he may be in a cloud flat 
    concept, lurking underneath the green out for an easy interception`,
    draftPosition: 85,
    signingBonus: -400000,

    }, {
        id: 'low',
        description: 
    `Number 6 is the defender to read, if he bails early to play the blue out then i would hit the orange speed 
    out underneath. If he sticks to orange speed out i would hit the deep blue out as the play developes.`,
        result: 
    `Correct! We are over loading one side of the field to create a 2v1 situation for the defender. 7 
    will always play the deep 3rd in cover three. If number 5 jumps 
    the orange speed out then the red drag will come open as your third option.`,
    draftPosition: -85,
    signingBonus: 400000,

    }]
};
const coverTwo = {
    id: 'coverTwo',
    title: 'How to attack cover 2 test',
    image: 'cover2.PNG',
    description: `Your coach calls for a deep post, deep in and and delayed angle route concept to beat cover 2. This one gets a bit tricky as their 
    are a few ways to set your progressions. For the sake if this play lets say its 1st down, mid 3rd quarter, up by 17. What defender 
    are you reading and whats your progression?`,
    
    choices: [{

        id: 'Middle',
        description: `number 4 is the defender to read, if he bails early to play a deep tampa 2 defense to gaurd the deep red in 
        i will hit the blue angle route. If the defendor stays tight to the green angle i will drop it over the top to the red deep in.`,
        result: `You know your stuff! reading the short routes is smart up 17 in the 3rd quarter, no reason to force anything deep`,
    draftPosition: -85,
    signingBonus: 400000,

    }, {
        id: 'deepMiddle',
        description: `Number 2 and 6 are the defenders to read. If either bail to cover the blue and purple go routes i will hit 
        the yellow deep post. If either stay home on the yellow post i will throw a outside shoulder fade to the go routes`,
        result: `Well.. its not wrong, but being up 17 in the third their is no reason to take a deep shot, a 6 yard pass kills clock and 
        keep the chains moving.`,
    draftPosition: 85,
    signingBonus: -400000,

    }]
};
const readOption = {
    id: 'readOption',
    title: 'How to run the read option out of spread',
    image: 'readoption.PNG',
    description: `This is an easy one from back in your college days. Your coach calls a 2x2 spread formation and a run run read option play. Based on the
    picture who is running the ball?`,
    
    choices: [{

        id: 'keep',
        description: `You keep the ball because the DE is crashing and the slot reciever is assigned to block the outside backer.`,
        result: `Correct. That was too easy. Simple run concept to keep that backside DE honest all game.`,
    draftPosition: -84,
    signingBonus: 400000,

    }, {
        id: 'give',
        description: `Im here to throw the ball not run it. I would give it to my back`,
        result: `This is a team game, you need to be a team player. We are creating an overload on one side you will have plenty of time to slide and keep 
        that precious arm safe.`,
    draftPosition: 84,
    signingBonus: -400000,

    }]
};

const concepts = [
    coverTwo,
    coverThree,
    readOption,
];

export default concepts;


