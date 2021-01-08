import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../components/auth/hooks';

type Location = {
  from: {
    pathname: string
  }
};

export const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

const Login: React.FC = () => {
  let history = useHistory();
  let location = useLocation<Location>();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
    console.log({ auth });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Login;
