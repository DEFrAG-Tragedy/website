export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();

    router.beforeEach((to, from, next) => {
        if (to.path === '/documents' && to.query.collection) {

            if (window.history.state && window.history.state.forward === null) {

            }
        }
        next();
    });
});