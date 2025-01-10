import { defineStore } from 'pinia';

export const Pages = {
    SEARCH: 'search',
};

export const useNavigationStore = defineStore('navigation', () => {
    const router = useRouter();

    const navigateToSearch = async (path: string) => {
        await router.push(`/${Pages.SEARCH}/${encodeURIComponent(path)}`);
    };

    return {
        navigateToSearch,
    };
});
