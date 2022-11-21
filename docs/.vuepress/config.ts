import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
    lang: 'zh-CN',
    description: '明日方舟周收菜脚本，autojsPro9,nodejs，vue2，vant',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    title:'autojs-arknights-ts',
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/logo.png',
    }),
})