const routes: RouteConfig[] = [
  {
    key: 'Home',
    path: '/',
    redirect: { to: '/checklist' },
    windowOptions: {
      title: 'App Home (Lettings Checklist)',
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
    },
    createConfig: {
      showSidebar: true,
      saveWindowBounds: true,
      // openDevTools: true,
    },
  },
]

export default routes
