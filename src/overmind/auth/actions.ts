import { Action, AsyncAction, rehydrate } from 'overmind';
import { User } from '.';
import { initState } from './state';

interface ILoginReq {
  username: string;
  password: string;
  callback?: () => void;
}
export const login: AsyncAction<ILoginReq> = async (
  { state, effects, actions },
  { username, password, callback }
) => {
  console.log('=> overmind login');
  try {
    const loginRequest = await effects.auth.api.login(username, password);
    const { payload } = loginRequest;
    switch (payload.login) {
      case 'success':
        actions.auth.persistAuth({
          user: payload.user,
          expiry: payload.expiry,
          callback: callback,
        });
        break;

      case 'failed':
        actions.auth.deAuth();
        break;
    }
  } catch {
    actions.auth.deAuth();
  }
};

export const logout: AsyncAction = async ({ state, effects, actions }) => {
  console.log('=> overmind logout');
  try {
    const logoutRequest = await effects.auth.api.logout();
    if (logoutRequest === true) actions.auth.deAuth();
    else {
    }
  } catch {}
};

export const persistAuth: Action<{
  user: User;
  expiry: string;
  callback?: () => void;
}> = ({ state, effects, actions }, { user, expiry, callback }) => {
  console.log('=> overmind authed');
  state.auth.user = user;
  state.auth.authExpiry = new Date(Date.parse(expiry));
  state.auth.token = 'tok3n';
  if (callback) callback();
};

export const deAuth: Action = ({ state, effects, actions }) => {
  console.log('=> overmind deauthed');
  state.auth.user = null;
  state.auth.authExpiry = new Date();
  state.auth.token = '';
};
