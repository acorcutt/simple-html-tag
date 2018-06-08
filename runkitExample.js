var html = require("simple-html-tag")

// Escape non-array variables by default
var a = html `<p>${'<script>This is escaped</script>'}</p>`;

// Join the results from map and escape parts
var b = html `<ul>${['one','two','<script>alert(3)</script>'].map( v =>(html `<li>${v}</li>`))}</ul>`;

// Unescaped variable
var c = html `<div>${[`<code>alert('This is not escaped')</code>`]}</div>`;

// Automatic array join
var output = html `${[a,b,c]}`;