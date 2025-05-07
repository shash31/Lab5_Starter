// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber() tests
test('testing valid phone no.', () => {
  expect(isPhoneNumber("(973)704-8190")).toBe(true);
});

test('testing phone no. with a space', () => {
  expect(isPhoneNumber("123 456-7890")).toBe(true);
});

test('testing phone no. without formatting', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('testing wrong length', () => {
  expect(isPhoneNumber("123456789")).toBe(false);
});


// isEmail() tests
test('testing valid ucsd email', () => {
  expect(isEmail("sdudeja@ucsd.edu")).toBe(true);
});

test('testing valid gmail', () => {
  expect(isEmail("shashwatdudeja@gmail.com")).toBe(true);
});

test('testing invalid email without @', () => {
  expect(isEmail("abc.com")).toBe(false);
});

test('testing invalid email without .com', () => {
  expect(isEmail("abc@d.")).toBe(false);
});


// isStrongPassword tests()
test('testing strong password', () => {
  expect(isStrongPassword("strongpwd")).toBe(true);
});

test('testing strong password with underscores and digits', () => {
  expect(isStrongPassword("strong_pwd123")).toBe(true);
});

test('testing weak short password', () => {
  expect(isStrongPassword("str")).toBe(false);
});

test(' testing weak long password', () => {
  expect(isStrongPassword("qwertyuiopsdfghjklzxcvbnm")).toBe(false);
});


// isDate() tests
test('testing valid date', () => {
  expect(isDate("05/31/2004")).toBe(true);
});

test('testing valid date with single digits', () => {
  expect(isDate("4/1/2025")).toBe(true);
});

test('testing invalid date format', () => {
  expect(isDate("123/123/1234")).toBe(false);
});

test('testing shorter year', () => {
  expect(isDate("12/12/25")).toBe(false);
});

// isHexColor() tests
test('testing red', () => {
  expect(isHexColor("FF5733")).toBe(true);
});

test('testing blue', () => {
  expect(isHexColor("3358FF")).toBe(true);
});

test('testing invalid longer hex code', () => {
  expect(isHexColor("2345FABC")).toBe(false);
});

test('testing gibberish', () => {
  expect(isHexColor("blah")).toBe(false);
});
