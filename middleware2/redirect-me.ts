export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== '/') {
        return navigateTo({
            path: '/',
            query: {
              page: 1,
              sort: 'asc'
            }
          });
      }
})