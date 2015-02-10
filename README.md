#  [![Build Status](https://travis-ci.org/earlonrails/resourcicious.svg?branch=master)](https://travis-ci.org/earlonrails/resourcicious.svg)

## Install

```sh
$ npm install --save resourcicious
```

## Usage

```js
var resourcicious = require('resourcicious');
var lo = require('lodash');
var foo = lo.clone(resourcicious);
var response;
foo.site = 'https://my-app.com/';
foo.path = 'videos/';
var response;
foo.all({}, function(req, resp){
  response = resp;
});

// check results
console.dir(response);

// or event style callbacks like request docs

foo.all().on('response', function(response) {
  // do thing with response
});

```


## License

MIT © [Kevin Krauss]()
