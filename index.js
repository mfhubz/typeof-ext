/*!
 * typeof-ext
 * Copyright(c) 2014 mfhubz
 * MIT Licensed
 *
 * A node.js module to get, check or compare real types.
 */

exports = module.exports = (function() {
    var types = [
        'function',
        'object',
        'array',
        'string',
        'boolean',
        'number',
        'date',
        'regexp',
        'error',
        'null',
        'undefined'
    ];

    function typeOf(a) {
        if (a === null) return 'null';
        if (a === undefined) return 'undefined';
        return a.constructor.name.toLowerCase();
    };

    typeOf.isFunction = function(a) {
        return (typeOf(a) === 'function');
    };

    typeOf.isObject = function(a) {
        return (typeOf(a) === 'object');
    };

    typeOf.isArray = function(a) {
        return (typeOf(a) === 'array');
    };

    typeOf.isString = function(a) {
        return (typeOf(a) === 'string');
    };

    typeOf.isBoolean = function(a) {
        return (typeOf(a) === 'boolean');
    };

    typeOf.isNumber = function(a) {
        return (typeOf(a) === 'number');
    };

    typeOf.isDate = function(a) {
        return (typeOf(a) === 'date');
    };

    typeOf.isRegexp = function(a) {
        return (typeOf(a) === 'regexp');
    };

    typeOf.isError = function(a) {
        return (typeOf(a) === 'error');
    };

    typeOf.isNull = function(a) {
        return (typeOf(a) === 'null');
    };

    typeOf.isUndefined = function(a) {
        return (typeOf(a) === 'undefined');
    };

    typeOf.is = function(a, type) {
        if (!typeOf.isString(type)) {
            return new Error('type must be a string');
        }
        if (types.indexOf(type) != -1) {
            return (typeOf(a) === type);
        }
        return false;
    };

    typeOf.in = function(a, arr) {
        if (!typeOf.isArray(arr)) {
            return new Error('arr must be an array');
        }
        for (var i = arr.length - 1; i >= 0; i--) {
            if (types.indexOf(arr[i]) === -1) {
                return new Error('arr only allow ' + types.toString() + ' values');
            }
            if (typeOf.is(a, arr[i])) {
                return true;
            }
        }
        return false;
    };

    typeOf.areEqual = function(a, b) {
        return (typeOf(a) === typeOf(b));
    };

    return typeOf;
})();
