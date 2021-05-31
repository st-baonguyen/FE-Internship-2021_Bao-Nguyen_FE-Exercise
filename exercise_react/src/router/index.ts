import React from 'react';
const BlogList = React.lazy(() => import('../components/BlogList'));
const BlogDetail = React.lazy(() => import('../components/BlogDetail'));

const routes = [
  {
    path: '/',
    component: BlogList,
    exact: true,
  },

  {
    path: '/:id',
    component: BlogDetail,
    exact: false,
  }
]

export default routes;
