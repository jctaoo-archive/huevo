const options = {
    "list": [
        ['1 4 Years old', 10],
        ['front-end!', 9],
        ['mobile-app😃', 7],
        ['[CS]', 6],
        ['designer?', 4],
        ['Math√', 5],
        ['AI', 4],
        ['block-chain', 3],
        ['cryptography', 3]
    ],
    "gridSize": 16, // size of the grid in pixels
    "weightFactor": 10, // number to multiply for size of each word in the list
    "fontWeight": 'bold', // 'normal', 'bold' or a callback
    "color": 'random-dark', // 'random-dark' or 'random-light'
    "backgroundColor": 'transparent', // the color of canvas
    "rotationSteps": 2, // probability for the word to rotate. 1 means always rotate
};
const canvas = document.getElementById('canvas');
WordCloud(canvas, options);
