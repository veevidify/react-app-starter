import React from 'react';
import { Logout } from '../components/auth/auth';
import Login from "../pages/Login";

export interface IRoute {
  path: string,
  exact?: boolean,
  text: string,
  sidebar: () => JSX.Element,
  main: () => JSX.Element,
}

export const authenticated: IRoute[] = [
  {
    path: "/",
    exact: true,
    text: "Home",
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/test-a",
    text: "Test A",
    sidebar: () => <div>test a</div>,
    main: () => <h2>Test A</h2>
  },
  {
    path: "/test-b",
    text: "Test B",
    sidebar: () => <div>test b</div>,
    main: () => <h2>Test B</h2>
  },
  {
    path: "/logout",
    text: "Log out",
    sidebar: () => <div>logout</div>,
    main: () => <Logout />
  }
];

export const unauthenticated: IRoute[] = [
  {
    path: "/login",
    text: "Log in",
    sidebar: () => <div>login</div>,
    main: () => <Login />
  }
];
