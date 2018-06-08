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
    return strings.reduce((prev, current, i) => (prev + transform(values[i - 1]) + current));
}

module.exports = html;