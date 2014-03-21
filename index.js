/*!
 * typeOf
 * Copyright(c) 2014 mfhubz
 * MIT Licensed
 *
 * Get, check or compare real typeof.
 */

exports = module.exports = (function() {
    
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
        if (!typeOf.isString(type)) {
            return new Error('type must be a string');
        }
        for (var i = types.length - 1; i >= 0; i--) {
            if (type === types[i]) {
                return (typeOf(a) === type);
            }
        };
        return false;
    };

    typeOf.areEqual = function(a, b) {
        return (typeOf(a) === typeOf(b));
    };

    return typeOf;
})();