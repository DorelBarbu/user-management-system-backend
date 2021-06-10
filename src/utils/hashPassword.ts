import bcrypt from "bcryptjs";

const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

const comparePasswords = (source: string, targetHash: string) =>
  bcrypt.compareSync(source, targetHash);

export { hashPassword, comparePasswords };
