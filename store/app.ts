import { defineStore } from "pinia";


interface AppState {
    query: string;
    isSidebarOpened: boolean;
    isXmlContentOpened: boolean;
    isCommentOpened: boolean;
    showResults: boolean,
    hasSearched: boolean,
}

export const useAppStore = defineStore('app', {
    state:(): AppState => {
        return {
            query: '',
            isSidebarOpened: false,
            isXmlContentOpened: false,
            isCommentOpened: false,
            showResults: false,
            hasSearched: false,
        };
    },
    actions: {
        toggleShowResults() {
            const route = useRoute();
            const queryParams = route.query;

            const showResultsContainer = queryParams.query !== undefined && queryParams.query!.length > 0;

            if(showResultsContainer) {
                this.hasSearched = true;
            } else {
                this.hasSearched = false;
            }
            this.showResults = true;

        },
        toggleSidebar() {
            this.isSidebarOpened = !this.isSidebarOpened;
        },
        toggleXmlContent() {
            this.isXmlContentOpened = !this.isXmlContentOpened;
        },
        toggleComment() {
            this.isCommentOpened = !this.isCommentOpened;
        },
        openSidebar() {
            this.isSidebarOpened = true;
        },
        closeSidebar() {
            this.isSidebarOpened = false;
        },
        closeXmlContent() {
            this.isXmlContentOpened = false;
        },
        closeComment() {
            this.isCommentOpened = false;
        },
        resetStore() {
           /* this.showResults = false;
            this.hasSearched = false;
            this.isSidebarOpened = false;
            this.query = '';*/
            this.$reset();
        },
    }
})