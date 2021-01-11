import { User } from '.';

interface ILoginResponse {
  payload: { login: 'success'; user: User; expiry: string } | { login: 'failed'; error: any };
}
export const api = {
  login: async (username: string, password: string): Promise<ILoginResponse> => {
    if (username === 'a' && password === '123456')
      return {
        payload: {
          login: 'success',
          user: {
            username: 'a',
            roles: ['user'],
          },
          expiry: '2022-01-01 00:00:00',
        },
      };
    else
      return {
        payload: {
          login: 'failed',
          error: true,
        },
      };
  },

  logout: async () => {
    return true;
  },
};
