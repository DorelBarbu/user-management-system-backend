import { sign, verify } from "../src/services/JwtService";


const jwtConfig = {
  secret: "my secret",
  expiresIn: 1,
};

test("Should correctly sign a token", () => {
  const token = sign(
    {
      id: "215125",
    },
    jwtConfig
  );

  expect(() => {
    verify(token, jwtConfig);
  }).not.toThrow();
});

test("Should return INVALID when token is expired", (done) => {
  const token = sign(
    {
      id: "215125",
    },
    jwtConfig
  );
  setTimeout(() => {
    expect(() => {
      verify(token, jwtConfig)
    }).toThrowError('jwt expired');
    done();
  }, 1001);
});
