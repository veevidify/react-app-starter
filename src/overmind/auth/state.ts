import { User } from '.';

type State = {
  user: Nullable<User>;
  token: Nullable<string>;
  authExpiry: Date;
};

export const initState: State = {
  user: null,
  token: null,
  authExpiry: new Date(),
};
