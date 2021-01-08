import { createContext, useState, useContext } from 'react';

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: () => void) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: () => void) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export const authContext = createContext({
  user: null as string|null,
  signin: (cb: () => void) => {},
  signout: (cb: () => void) => {},
});

export const useAuth = () => {
  return useContext(authContext);
}

export const useProvideAuth = () => {
  const [user, setUser] = useState<string|null>(null);

  const signin = (cb: () => void) => {
    console.log("=> signing in")

    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb: () => void) => {
    console.log("=> signing out")

    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}
