import React from 'react';
import Login from "../pages/Login";

export interface IRoute {
  path: string,
  exact?: boolean,
  sidebar: () => JSX.Element,
  main: () => JSX.Element,
}

export const authenticated: IRoute[] = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/test-a",
    sidebar: () => <div>test a</div>,
    main: () => <h2>Test A</h2>
  },
  {
    path: "/test-b",
    sidebar: () => <div>test b</div>,
    main: () => <h2>Test B</h2>
  }
];

export const unauthenticated: IRoute[] = [
  {
    path: "/login",
    sidebar: () => <div>login</div>,
    main: () => <Login />
  }
];
