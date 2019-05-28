export const root = '';

export default [
  {
    path: root,
    component: '../layout',
    routes: [
      { path: '/', component: 'home' },
      { path: '/list', component: 'list' },
      { path: '/user', component: 'user' },
    ],
  },
];
