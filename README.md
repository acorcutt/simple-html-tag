# simple-html-tag
A simple and fast tag function for safe html es6 literals.

[Runkit Example](https://npm.runkit.com/simple-html-tag)

## Details

This simple function makes working with html literals easier, variables are escaped, but arrays are automatically joined and unescaped to allow for easy html list output. Whitespace is not altered and no additional tags are required to escape or unescape the output.

## Usage

All non-array variables are escaped by default...

```js
html `<p>${'<script>This is escaped</script>'}</p>`
```

Arrays are unescaped and joined so ensure mapped content is wrapped in a html tag to escape...
```js
html `<ul>${['one','two','<script>alert(3)</script>'].map( v =>(html `<li>${v}</li>`))}</ul>`
```

To force the unescape of a variable just wrap in an array...
```js
html `<div>${[`<script>alert('This is not escaped')</script>`]}</div>`
```