import _ from 'lodash';

const assert = (condition, message) => {
    if (!condition) {
        throw new Error('Assertion failed:', message);
    }
};

assert.isString = value => {
    assert(_.isString(value), `Expected ${value} to be a string`);
};

assert.isFunction = value => {
    assert(_.isFunction(value), `Expected ${value} to be a function`);
};

assert.isObject = value => {
    assert(_.isObject(value), `Expected ${value} to be a object`);
};

export default assert;