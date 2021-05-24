import { JwtStatus } from "../src/interfaces/IJwtProvider";
import JwtProvider from "../src/services/JwtProvider";


test('Should correctly sign a token', () => {
  const jwtProvider = new JwtProvider('my secret', 10);
  const token = jwtProvider.sign({
    id: '215125'
  });
  expect(jwtProvider.verify(token)).toBe(JwtStatus.VALID);
});

test("Should return INVALID when token is expired", done => {
  const jwtProvider = new JwtProvider('my secret', 1);
  const token = jwtProvider.sign({
    id: '215125'
  });

  setTimeout(() => {
    expect(jwtProvider.verify(token)).toBe(JwtStatus.INVALID);
    done();
  }, 1001);
});