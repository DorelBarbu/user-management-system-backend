interface UserDAO {
  username: string;
  emai: string;
  id: string;
  password: string;
}

interface IUserRepository {
  getUserById(userId: string): Promise<UserDAO>;
  getUserByEmail(userEmail: string): Promise<UserDAO>;
}