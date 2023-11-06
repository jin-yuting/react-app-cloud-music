import React from 'react';
// import { Redirect } from "react-router-dom";
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          element: recommend
          // <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        element: Recommend
      },
      {
        path: "/singers",
        element: Singers
      },
      {
        path: "/rank",
        element: Rank
      }
    ]
  }
]