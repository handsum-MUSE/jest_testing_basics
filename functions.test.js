const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('should be Null', () => {
    expect(functions.isNull()).toBe(null);
});

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});