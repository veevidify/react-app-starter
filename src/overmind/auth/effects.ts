import { CookieAuth, User } from '.';

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

export const cookieAuth = {
  read: async (): Promise<Nullable<CookieAuth>> => {
    const deserialisedCookie = document.cookie
      .split('; ')
      .map((keyValue: string) => keyValue.split('='));

    const cookieAuthStr = deserialisedCookie.find((kvArr) => kvArr[0] === 'auth');
    const cookieAuth = cookieAuthStr ? JSON.parse(cookieAuthStr[0]) : null;
    return cookieAuth;
  },
  set: async (cookieAuth: CookieAuth): Promise<void> => {
    const deserialisedCookie = document.cookie
      .split('; ')
      .map((keyValue: string) => keyValue.split('='));

    const newCookie = deserialisedCookie
      .map((kvArr) => {
        if (kvArr[0] === 'auth') {
          kvArr[1] = JSON.stringify(cookieAuth);
        }
        return kvArr[0] + '=' + kvArr[1];
      })
      .join('; ');

    document.cookie = newCookie;
  },
  clear: async (): Promise<void> => {
    const deserialisedCookie = document.cookie
      .split('; ')
      .map((keyValue: string) => keyValue.split('='));

    const newCookie = deserialisedCookie
      .map((kvArr) => {
        if (kvArr[0] === 'auth') {
          kvArr[1] = '';
        }
        return kvArr[0] + '=' + kvArr[1];
      })
      .join('; ');

    document.cookie = newCookie;
  },
};
