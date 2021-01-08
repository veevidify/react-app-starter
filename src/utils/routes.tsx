import { JsxElement } from "typescript";
import React from 'react';

type Route = {
  path: string,
  exact?: boolean,
  sidebar: () => JSX.Element,
  main: () => JSX.Element,
}

export const authenticated: Route[] = [
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

export const unauthenticated: Route[] = [];
