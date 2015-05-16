# temporary-directory

[![NPM](https://nodei.co/npm/temporary-directory.png)](https://nodei.co/npm/temporary-directory/)

create a random temporary directory and easily clean it up when you are done

## installation

```
npm install temporary-directory
```

### example

```js
var tmp = require('temporary-directory')

tmp(function created (err, dir, cleanup) {
  if (err) console.error('Error creating tmpdir!', err)

  // do cool stuff with dir here...
  
  // later, when you wanna destroy the tmpdir:
  cleanup(function cleanedUp (err) {
    if (err) console.error('Error removing tmpdir!', err)
  })
})
```

## API

### var tmpdir = require('temporary-directory')

returns a constructor function that can be used to create new temporary directories

### tmpdir([name], callback)

`name` is optional, if you pass it then your tmpdir name will start with `name-<random-id>`, otherwise it defaults to `tmp-<random-id>`

`callback` will be called with `err, dir, cleanup`

- `err` is if there was an error creating your tmpdir
- `dir` is a string of the absolute path to your tmpdir (inside your `require('os').tmpdir()`)
- `cleanup` is a function you can call (if you want) that will destroy the tmpdir and everything in it. it takes a single `callback` argument that takes a single `error` argument, but the callback is optional.
