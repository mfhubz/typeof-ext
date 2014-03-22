# typeof-ext #

A node.js module to get, check or compare real typeof.

## Install ##

From your proyect:

```
    $ npm install --save typeof-ext
```

## Usage ##

```
    // use typeOf instead of typeof to avoid name colissions.
    var typeOf = require('./typeof-ext');

```
  - Get types

```
    typeOf(function(){});              // return 'function'
    typeOf({});                        // return 'object'
    typeOf([]);                        // return 'array'
    typeOf('');                        // return 'string'
    typeOf(true);                      // return 'boolean'
    typeOf(1);                         // return 'number'
    typeOf(new Date());                // return 'date'
    typeOf(/[a-z]/i);                  // return 'regexp'
    typeOf(new Error());               // return 'error'
    typeOf(null);                      // return 'null'
    typeOf(undefined);                 // return 'undefined'
```

  - Check types

```
    typeOf.isFunction(function(){});   // return true
    typeOf.isObject({});               // return true
    typeOf.isArray([]);                // return true
    typeOf.isString('');               // return true
    typeOf.isBoolean(true);            // return true
    typeOf.isNumber(1);                // return true
    typeOf.isDate(new Date());         // return true
    typeOf.isRegexp(/[a-z]/);          // return true
    typeOf.isError(new Error());       // return true
    typeOf.isNull(null);               // return true
    typeOf.isUndefined(undefined);     // return true
    
    typeOf.is(1, 'number');            // return true
    typeOf.is(1, 'string');            // return false

    typeOf.in(1, ['number', 'date']);  // return true
    typeOf.in(1, ['string', 'null']);  // return false
```

  - Compare types

```    
    typeOf.areEqual(1, 1000));           // return true
```

## Tests ##

```
    $ npm install
    $ make test
```

## Credits

  - [mfhubz](http://github.com/mfhubz)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 mfhubz.

