
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
	faSearch,
	faBars,
	faCaretRight,
	faXmark,
	faInfoCircle,
	faUsers,
	faFileAlt,
	faCircleQuestion,
	faBook,
	faDiagramProject,
	faBuildingColumns,
	faPenToSquare,
	faCaretUp,
	faCaretDown,
	faArrowLeft,
	faArrowRight,
	faHandshake,
} from '@fortawesome/free-solid-svg-icons'


// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
//library.add(fas)
library.add(
	faSearch,
	faBars,
	faCaretRight,
	faXmark,
	faInfoCircle,
	faUsers,
	faFileAlt,
	faCircleQuestion,
	faBook,
	faDiagramProject,
	faBuildingColumns,
	faPenToSquare,
	faCaretUp,
	faCaretDown,
	faArrowLeft,
	faArrowRight,
	faHandshake
)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

