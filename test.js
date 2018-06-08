const html = require('./index.js')

let test = html `<b>${'<escaped>'}${['<unescaped>']}</b>`;
let expected = '<b>&lt;escaped&gt;<unescaped></b>';

console.assert(test === expected, 'It Failed!');
console.log('Done!')