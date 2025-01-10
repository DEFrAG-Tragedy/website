import {useSaveLastSearchedValue, useSaveLastUpdatesValue} from "~/composables/useLocalStorage";


export default defineNuxtRouteMiddleware((to, from) => {
    // Check if the URL ends with ".xml"
    if (to.path.endsWith('.xml') || to.path.endsWith('annotations')) {
        const queryParams = { document: to.path };
        return navigateTo({ path: '/xml-render', query: queryParams });
    }
});
