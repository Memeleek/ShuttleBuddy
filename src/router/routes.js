const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
      { path: 'Login', component: () => import('src/pages/LoginPage.vue') },
      { path: 'Match', component: () => import('src/pages/MatchPage.vue') },
      { path: 'Profie', component: () => import('src/pages/ProfilePage.vue') },
      { path: 'Settings', component: () => import('src/pages/SettingsPage.vue') },
      { path: 'Signup', component: () => import('src/pages/SignupPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
