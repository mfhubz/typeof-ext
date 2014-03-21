# typeof #

Get, check or compare real typeof.

## Install ##

From your proyect:

```
    $ npm install --save typeof
```

## Usage ##

  - Get typeof

```
    console.log(typeOf(function(){}));              // return 'function'
    console.log(typeOf({}));                        // return 'object'
    console.log(typeOf([]));                        // return 'array'
    console.log(typeOf(''));                        // return 'string'
    console.log(typeOf(true));                      // return 'boolean'
    console.log(typeOf(1));                         // return 'number'
    console.log(typeOf(new Date()));                // return 'date'
    console.log(typeOf(/[a-z]/i));                  // return 'regexp'
    console.log(typeOf(new Error()));               // return 'error'
    console.log(typeOf(null));                      // return 'null'
    console.log(typeOf(undefined));                 // return 'undefined'
```

  - Check typeof

```
    console.log(typeOf.isFunction(function(){}));   // return true
    console.log(typeOf.isObject({}));               // return true
    console.log(typeOf.isArray([]));                // return true
    console.log(typeOf.isString(''));               // return true
    console.log(typeOf.isBoolean(true));            // return true
    console.log(typeOf.isNumber(1));                // return true
    console.log(typeOf.isDate(new Date()));         // return true
    console.log(typeOf.isRegexp(/[a-z]/));          // return true
    console.log(typeOf.isError(new Error()));       // return true
    console.log(typeOf.isNull(null));               // return true
    console.log(typeOf.isUndefined(undefined));     // return true
    
    console.log(typeOf.is(1, 'string'));            // return false
    console.log(typeOf.is(1, 'number'));            // return true
    
    console.log(typeOf.areSame(1, 1000));           // return true
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
