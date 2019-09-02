// Import main css
import '~/assets/style/index.css'
import '~/assets/style/resume.css'
import Vuex from "vuex";

// Import default layout so we don't need to import it to every page
//import DefaultLayout from '~/layouts/Default.vue'
import vcard from "~/vcardbank.js";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient, appOptions }) {
    Vue.use(Vuex)

    appOptions.store = new Vuex.Store({
        modules: {
            vcard,
        }
    });

    //Vue.component('Layout', DefaultLayout)
}