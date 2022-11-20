// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("Check valid phone number", () =>{
    const arg = '(626)';
    const arg1 = '(626)111-1111';
    const arg2 = '(626)123-112';
    const arg3 = '(626)11-1212';
    expect(functions.isPhoneNumber(arg)).toBe(false);
    expect(functions.isPhoneNumber(arg1)).toBe(true);
    expect(functions.isPhoneNumber(arg2)).toBe(false);
    expect(functions.isPhoneNumber(arg3)).toBe(false);
});


test("Check valid email address", () =>{
    const arg = 'asdfasdfasdfasdf';
    const arg1 = 'adfadfasdf@gmail.com';
    const arg2 = '@@afasdf.com';
    const arg3 = '1241234@ucsd.edu';
    expect(functions.isEmail(arg)).toBe(false);
    expect(functions.isEmail(arg1)).toBe(true);
    expect(functions.isEmail(arg2)).toBe(false);
    expect(functions.isEmail(arg3)).toBe(true);
});


test("Check valid strong password", () =>{
    const arg = '1231321123'; // not start with letter
    const arg1 = 'a';         // only enough 4 characters
    const arg2 = 'adfa@@';    // contain character other than * _ and numbers
    const arg3 = 'dafafadfadfasdfasdfasfasdfadsf'; // >= 15 characters
    const arg4 = 'X1231ljl_';
    const arg5 = 'hadfadf1* *'

    expect(functions.isStrongPassword(arg)).toBe(false);
    expect(functions.isStrongPassword(arg1)).toBe(false);
    expect(functions.isStrongPassword(arg2)).toBe(false);
    expect(functions.isStrongPassword(arg3)).toBe(false);
    expect(functions.isStrongPassword(arg4)).toBe(true);
});

test("Check valid date", () =>{
    const arg = '1/1/20000'; // year > 5 digits
    const arg1 = '1-1-2000';         // wrong dlitmer
    const arg2 = '11/01/2000';    // correct one
    const arg3 = '11/1/2000'; // correct one
    const arg4 = '111/1/2023'; // wrong month
    const arg5 = '12/1231/3000'; // wrong day

    expect(functions.isDate(arg)).toBe(false);
    expect(functions.isDate(arg1)).toBe(false);
    expect(functions.isDate(arg2)).toBe(true);
    expect(functions.isDate(arg3)).toBe(true);
    expect(functions.isDate(arg4)).toBe(false);
    expect(functions.isDate(arg5)).toBe(false);
});

test("Check valid HexColor", () =>{
    const arg =  '70049f';  // correct
    const arg1 = '#gggggg'; // not a-f      
    const arg2 = '#70049f'; // correct
    const arg3 = '#aaaaaa'; // correct
    const arg4 = '#12313123'; // wrong character 
    const arg5 = '#f13';       // correct
    expect(functions.isHexColor(arg)).toBe(true);
    expect(functions.isHexColor(arg1)).toBe(false);
    expect(functions.isHexColor(arg2)).toBe(true);
    expect(functions.isHexColor(arg3)).toBe(true);
    expect(functions.isHexColor(arg4)).toBe(false);
    expect(functions.isHexColor(arg5)).toBe(true);
});
