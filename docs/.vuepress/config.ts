import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { tocPlugin } from '@vuepress/plugin-toc'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import {searchPlugin} from "@vuepress/plugin-search";
export default defineUserConfig({
    lang: 'zh-CN',
    description: '明日方舟周收菜脚本，autojsPro9,nodejs，vue2，vant',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    title:'autojs-arknights-ts',
    plugins: [
        backToTopPlugin(),
        tocPlugin({
            // 配置项
        }),
        activeHeaderLinksPlugin({
            headerLinkSelector:'.vuepress-toc-link'
        }),
        searchPlugin({
            // 配置项
        }),
    ],
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/logo.png',
        // 导航栏
        navbar: [
            {
                text: '个人链接',
                children:[
                    {
                        text: 'b站',
                        link: 'https://space.bilibili.com/95667314',
                    },
                    {
                        text: '抖音',
                        link: 'https://www.douyin.com/user/MS4wLjABAAAAVaIKYLt5SGqOtvh-Sd6n8LZowfI8mB49xePkGsGq8P59Rwon9LeRGifG8LfBqu4p',
                    },
                ]
            },
            {
                text: 'github',
                link: 'https://github.com/leonProj/autojs-arknights-ts',
            },
            {
                text: 'gitee',
                link: 'https://gitee.com/leonProj/autojs-arknights-ts',
            },
            {
                text: 'autojsPro9',
                link: 'https://pro.autojs.org/docs/',
            },
            {
                text:'vant2',
                link:'http://vant-contrib.gitee.io/vant/v2/#/zh-CN/'
            },
            {
                text:'vuejs',
                link:'https://cn.vuejs.org/'
            },
        ],
        sidebar: [
            // 字符串 - 页面文件路径
            '/start/',
            '/question/',
            '/structure/',
            '/logic/',
            '/gameLogic/',
            '/ui/',
        ],
        sidebarDepth: 0,
    })
})