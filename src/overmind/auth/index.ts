import { initState } from './state';
import * as actions from './actions';
import * as effects from './effects';

const config = {
  state: initState,
  actions,
  effects,
};

export type User = {
  username: string,
  roles: string[],
}

export default config;
