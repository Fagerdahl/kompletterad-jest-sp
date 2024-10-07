const {toUpperCase} = require('./nameProcessor');
console.log(toUpperCase);

test('should convert to uppercase', () => {
    expect(toUpperCase('test')).toBe('TEST');

});