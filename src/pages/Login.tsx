import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { PaddedContainer, PasswordField, TextField, Button } from 'precise-ui';

import { useActions, useStore } from '../overmind';

type Location = {
  from: {
    pathname: string;
  };
};

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation<Location>();
  const { from } = location.state || { from: { pathname: '/' } };

  const [usernameInput, changeUsernameInput] = useState<string>('');
  const [passwordInput, changePasswordInput] = useState<string>('');
  const { auth: authState } = useStore();
  const { auth: authActions } = useActions();

  return !authState.user ? (
    <div>
      <PaddedContainer gutter="small">
        <TextField
          label="username"
          value={usernameInput}
          onChange={(e) => {
            changeUsernameInput(e.value);
          }}
        ></TextField>
      </PaddedContainer>
      <PaddedContainer gutter="small">
        <PasswordField
          label="password"
          value={passwordInput}
          onChange={(e) => {
            changePasswordInput(e.value);
          }}
        ></PasswordField>
      </PaddedContainer>
      <PaddedContainer gutter="small">
        <Button
          onClick={() => {
            authActions.login({
              username: usernameInput,
              password: passwordInput,
              callback: () => {
                console.log('=> login callback');
                history.replace('/');
              },
            });
          }}
        >
          Log in
        </Button>
      </PaddedContainer>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Login;
