var assert = require('assert')
  , typeOf = require('./../index');


suite('typeOf', function() {
  
  // Get typeof
  test('typeOf should return the typeof', function() {
    assert.equal('function', typeOf(function(){}));
    assert.equal('object', typeOf({}));
    assert.equal('array', typeOf([]));
    assert.equal('string', typeOf(''));
    assert.equal('boolean', typeOf(true));
    assert.equal('number', typeOf(1));
    assert.equal('date', typeOf(new Date()));
    assert.equal('regexp', typeOf(/[a-z]/));
    assert.equal('error', typeOf(new Error()));
    assert.equal('null', typeOf(null));
    assert.equal('undefined', typeOf(undefined));
  });

  // Check
  test('typeOf.isFunction should return boolean', function() {
    assert.equal(true, typeOf.isFunction(function(){}));
    assert.equal(false, typeOf.isFunction({}));
  });
  test('typeOf.isObject should return boolean', function() {
    assert.equal(true, typeOf.isObject({}));
    assert.equal(false, typeOf.isObject([]));
  });
  test('typeOf.isArray should return boolean', function() {
    assert.equal(true, typeOf.isArray([]));
    assert.equal(false, typeOf.isArray({}));
  });
  test('typeOf.isString should return boolean', function() {
    assert.equal(true, typeOf.isString(''));
    assert.equal(false, typeOf.isString(1));
  });
  test('typeOf.isBoolean should return boolean', function() {
    assert.equal(true, typeOf.isBoolean(false));
    assert.equal(false, typeOf.isBoolean(0));
  });
  test('typeOf.isNumber should return boolean', function() {
    assert.equal(true, typeOf.isNumber(1));
    assert.equal(false, typeOf.isNumber('1'));
  });
  test('typeOf.isDate should return boolean', function() {
    assert.equal(true, typeOf.isDate(new Date()));
    assert.equal(false, typeOf.isDate('Fri Mar 21 2014 00:59:37 GMT+0100 (CET)'));
  });  
  test('typeOf.isRegexp should return boolean', function() {
    assert.equal(true, typeOf.isRegexp(/[a-z]/));
    assert.equal(false, typeOf.isRegexp('/[a-z]/'));
  });  
  test('typeOf.isError should return boolean', function() {
    assert.equal(true, typeOf.isError(new Error()));
    assert.equal(false, typeOf.isError({error: 1}));
  });
  test('typeOf.isNull should return boolean', function() {
    assert.equal(true, typeOf.isNull(null));
    assert.equal(false, typeOf.isNull(undefined));
  });  
  test('typeOf.isUndefined should return boolean', function() {
    assert.equal(true, typeOf.isUndefined(undefined));
    assert.equal(false, typeOf.isUndefined(null));
  });

  // Check with is
  test('typeOf.is should return boolean or Error', function() {
    assert.equal(true, typeOf.is(undefined, 'undefined'));
    assert.equal(false, typeOf.is(undefined, 'null'));
    assert.equal('type must be a string', typeOf.is(undefined, undefined).message);
  });

  // Compare
  test('typeOf.areEqual should return boolean', function() {
    assert.equal(true, typeOf.areEqual([], ['undefined', 2]));
    assert.equal(false, typeOf.areEqual([], {}));
  });
});
