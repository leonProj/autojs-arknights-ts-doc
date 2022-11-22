import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { tocPlugin } from '@vuepress/plugin-toc'

export default defineUserConfig({
    lang: 'zh-CN',
    description: '明日方舟周收菜脚本，autojsPro9,nodejs，vue2，vant',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    title:'autojs-arknights-ts',
    plugins: [
        backToTopPlugin(),
        tocPlugin({
            // 配置项
        })
    ],
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/logo.png',
        // 导航栏
        navbar: [
            {
                text: 'github',
                link: 'https://github.com/leonProj/autojs-arknights-ts',
            },
            {
                text: 'gitee',
                link: 'https://gitee.com/leonProj/autojs-arknights-ts',
            },
        ],
        sidebarDepth: 0,
    })
})