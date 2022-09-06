const solution = require('./longestDigitsPrefix.js');

test('test 1', () => {
    expect(solution('123aa1')).toBe('123');
});

test('test 2', () => {
    expect(solution('0123456789')).toBe('0123456789');
});

test('test 3', () => {
    expect(solution('  3) always check for whitespaces')).toBe('');
});

test('test 4', () => {
    expect(solution('12abc34')).toBe('12');
});

test('test 5', () => {
    expect(solution('the output is 42')).toBe('');
});

test('test 6', () => {
    expect(solution('aaaaaaa')).toBe('');
});
