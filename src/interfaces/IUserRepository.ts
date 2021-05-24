interface UserDAO {
  username: string;
  emai: string;
  id: string;
  password: string;
}

interface IUserRepository {
  findUserById(userId: string): Promise<UserDAO>;
  findUserByEmail(userEmail: string): Promise<UserDAO>;
}