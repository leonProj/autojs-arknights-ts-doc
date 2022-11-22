# 快速开始

## 准备工作

::: tip 技术要求
要求简单掌握js,ts和vue2
:::

- 准备安卓版本9.0或其以上的模拟器，测试使用的雷电模拟器9
- 下载autojspro9：[pro.autojs.org](https://pro.autojs.org/docs/#/zh-cn/coordinatesBasedAutomation)
- nodejs环境
- npm或者yarn等包管理工具

## autojs安装与配置
::: tip 提示
文档中示例使用的是雷电模拟器9
:::
::: warning 注意
autojs4.1版本github开源免费，后续的Pro版本需要付费45元。如果你不想付费，可以使用4.1版本，或者第三方以4.1版本二开的库尝鲜，不必再继续阅读此文档
:::
### 安装autojs
<Mimg src="start/install.png" width="500"/>

### 开启无障碍服务
点击右上角的设置按钮
<Mimg src="start/menuBtn.png"/>
打开无障障碍服务
<Mimg src="start/img.png" width="400"/>
### 下载安装文字识别插件
OCR下载地址：[https://wws.lanzoux.com/iduulmofune](https://wws.lanzoux.com/iduulmofune)  密码：habv ；下载下来的是一个apk文件，直接安装到模拟器即可
<Mimg src="start/img_1.png" />
::: tip 提示
丢到模拟器中安装的时候什么反应都没有是正常的。打开插件市场，点击浩然ocr看到插件已经安装成功了
:::
<Mimg src="start/img_2.png"  width="400"/>
<Mimg src="start/img_3.png"  width="700"/>
## 项目初始化
### 构建项目
```bash
 npm run build
```
### 启动项目