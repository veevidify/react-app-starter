import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

type Location = {
  from: {
    pathname: string
  }
};

const Login: React.FC = () => {
  let history = useHistory();
  let location = useLocation<Location>();

  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div>
      <button onClick={() => {}}>Log in</button>
    </div>
  );
}

export default Login;
