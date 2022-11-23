# 项目结构
## 目录说明
```markdown
|-- autojs-arknights-ts
    |-- bin 构建后目录
    |   |-- main.node.js 执行的主js文件 
    |-- script build时的一些脚本，主要是添加一些autojs需求的头和移动或删除一些文件夹，不用管
    |-- src
        |-- main.js 入口文件 用于启动ui
        |-- constant 常量目录
        |-- img 图片目录
        |-- main 主要逻辑目录
        |   |-- index.ts  运行的主要逻辑在这里
        |-- router 路由目录
        |   |-- construction.ts 基建
        |   |-- friendHome.ts 好友
        |   |-- index.ts 主要路由
        |   |-- publicRecruit.ts 公招
        |   |-- purchase.ts 采购中心
        |-- state 运行时的一些状态
        |   |-- index.ts 
        |-- test 测试目录 用于测试一些逻辑，不会启动ui界面
        |   |-- index.ts
        |-- utils 工具目录
        |   |-- accessibilityUtil.ts 无障碍
        |   |-- commonUtil.ts 通用
        |   |-- imageUtil.ts 图片
        |   |-- ocrUtil.ts 文字识别
        |   |-- point.ts 坐标
        |   |-- webviewUtil.ts webview，安卓主动调用vue方法
        |-- web ui界面目录
            |-- main.vue 主vue文件
```
## 脚本命令
### build
该命令是打包会以src/main.js为入口，打包后的执行文件在bin/main.node.js。运行会启动ui界面。
```bash
npm run build # 构建
```
### test
会以src/test/index.ts为入口，打包后的执行文件在bin/test/index.js。运行不会启动ui界面。会直接执行test/index.ts中的代码。主要是为了测试小的逻辑。
```bash
npm run test # 测试
```
