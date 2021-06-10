import { hashPassword, comparePasswords } from "../src/utils/hashPassword"

test("Shoud correctly hash password", () => {
  const hash = hashPassword('my password');
  expect(comparePasswords('my password', hash)).toBe(true);
  expect(comparePasswords('fake password', hash)).toBe(false);
});