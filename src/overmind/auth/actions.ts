import { Action, AsyncAction, rehydrate } from 'overmind';
import { User } from '.';
import { initState } from './state';

interface ILoginReq {
  username: string,
  password: string
}
export const login: AsyncAction<ILoginReq> = async (
  { state, effects, actions },
  { username, password }
) => {
  try {
    const loginRequest = await effects.auth.api.login(username, password);
    const { payload } = loginRequest;
    switch (payload.login) {
      case "success":
        actions.auth.persistAuth({ user: payload.user, expiry: payload.expiry });
        break;

      case "failed":
        actions.auth.deAuth();
        break;
    }
  } catch {
    actions.auth.deAuth();
  }
}

export const logout: AsyncAction = async ({ state, effects, actions }) => {
  try {
    const logoutRequest = await effects.auth.api.logout();
    if (logoutRequest === true)
      actions.auth.deAuth();
    else {  }
  } catch {  }
};

export const persistAuth: Action<{
  user: User,
  expiry: string,
}> = ({ state, effects, actions }, { user, expiry }) => {
  state.auth.user = user;
  state.auth.authExpiry = new Date(Date.parse(expiry));
  state.auth.token = "tok3n";
}

export const deAuth: Action = ({ state, effects, actions }) => {
  state.auth = initState;
}
