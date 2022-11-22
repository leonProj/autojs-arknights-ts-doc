import { defineClientConfig } from '@vuepress/client'
import Mimg from './components/Mimg.vue'
// @ts-ignore
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
    layouts: {
        Layout,
    },
    enhance({ app }) {
        app.component('Mimg', Mimg)
    },
})