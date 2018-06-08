// Super simple & fast html tag for es6 literals
// - all non-array variables escaped html`<i>${'<b>Escaped</b>'}</i>`
// - use array wrapper to unescape a string or results from map html `<i>${['<b>Unescaped</b>']}</i>`

const escaped = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "`": "&#96;"
};
const re = /[&<>"'`]/g;

function transform(value) {
    if (Array.isArray(value)) {
        return value.join('');
    } else {
        return String(value).replace(re, match => escaped[match])
    }
}

function html(strings, ...values) {
    // Note... i is 1 if initalValue is not provided to reduce so we can use i-1 and avoid length check
    return strings.reduce((prev, current, i) => (prev + transform(values[i - 1]) + current));
}

module.exports = html;