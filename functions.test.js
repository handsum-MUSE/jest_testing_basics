const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be Null', () => {
    expect(functions.isNull()).toBe(null);
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Egbo Uchenna object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Uchenna',
        lastName: 'Egbo' 
    });
});

//  Greater Than or Less Than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ["Karen", 'Joy', 'Admin'];
    expect(usernames).toContain('Admin');
});

// Working with Async data

//Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     })
// },20000);

// Async Await 
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//         expect(data.name).toEqual('Leanne Graham');
// },10000);