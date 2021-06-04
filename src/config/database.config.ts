export interface DatabaseConfig {
  connectionUrl: string;
}

export const databaseConifg: DatabaseConfig = {
  connectionUrl: process.env.CONNECTION_URL as string
};
