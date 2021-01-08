import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { useActions, useStore } from '../overmind';

type Location = {
  from: {
    pathname: string
  }
};

const Login: React.FC = () => {
  let history = useHistory();
  let location = useLocation<Location>();
  let { from } = location.state || { from: { pathname: "/" } };

  const [usernameInput, changeUsernameInput] = useState<string>("");
  const [passwordInput, changePasswordInput] = useState<string>("");
  const { auth: authState } = useStore()
  const { auth: authActions } = useActions()

  return (
    !authState.user ? (
      <div>
        <input type="text" value={usernameInput} onChange={(e) => { changeUsernameInput(e.target.value) }}></input>
        <input type="text" value={passwordInput} onChange={(e) => { changePasswordInput(e.target.value) }}></input>
        <div>
          <button onClick={() => {
            authActions.login({
              username: usernameInput,
              password: passwordInput
            })}}
          >Log in</button>
        </div>
      </div>
    ) : <Redirect to="/protected" />
  );
}

export default Login;
