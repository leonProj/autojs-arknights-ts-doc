# 界面
## 简介
<Mimg src="logic/img_2.png" width="700"/>

上图中四个switch开关就是与这里的值绑定的，关闭代表流程没完成。开启代表流程已完成

`src\state\index.ts`
```ts
/**
 * @Description: 游戏信息
 */
export interface GameInfo {
    /**
     * @Description: 是否公招结束 默认false
     */
    isPublicRecruitEnd: boolean;

    /**
     * 是否采购中心结束。默认false
     */
    isPurchaseEnd:boolean

    /**
     * 是否访问好友结束。默认false
     */
    isFriendHomeEnd:boolean

    /**
     * 是否基建流程结束。默认false
     */
    isConstructionEnd:boolean
}
const gameInfo: GameInfo = {
    isPublicRecruitEnd: false,
    isPurchaseEnd:false,
    isFriendHomeEnd:false,
    isConstructionEnd:false,
}
```
:::tip
vue目录在`src/web`下，采用vue2+vant2
:::
## vue调用脚本
### 简单调用
vue中通过invoke调用脚本

`src/web/main.vue`
```vue
<script>
export default {
  methods: {
    // 展示日志界面
    showLog() {
      $autojs.invoke("show-log");
    },
  },
}
</script>
```
脚本中通过handle处理vue的调用

`src/main.js`
```js
class WebActivity extends ui.Activity {
    setupWebView(webview) {
        jsBridge.handle('show-log', () => {
            app.startActivity('console');
        });
    }   
}
```
### 获取返回值

vue中通过invoke调用脚本

`src/web/main.vue`
```vue
<script>
export default {
  created() {
    $autojs.invoke("created").then((param) => {
      this.tasks = param.tasks;
      this.gameInfo = param.gameInfo;
    });
  },
  data() {
    return {
      tasks: null,
      gameInfo: null,
    };
  },
}
</script>
```
脚本中通过handle处理vue的调用,并返回值
`src/main.js`
```js
class WebActivity extends ui.Activity {
    setupWebView(webview) {
        jsBridge.handle('created', () => {
            return {
                tasks,
                gameInfo
            }
        });
    }   
}
```
## 脚本调用vue
### 简单调用
vue中将方法挂载到window上
`src/web/main.vue`
```vue
<script>
export default {
  created() {
    window.stopRun = () => {
      this.isStopping = false;
      this.isRun = false;
    }
  },
  data() {
    return {
      isRun: false,// 脚本是否正在运行
      isStopping: false,// 脚本是否正在停止
    };
  },
}
</script>
```
`任意脚本位置`
```ts
import {callVueMethod} from "@/utils/webviewUtil";
/**
 * 停止运行
 */
function stop() {
    callVueMethod('stopRun');
    deviceInfo.capturer?.stop()
}
```
### 传递参数
vue中将方法挂载到window上

`src/web/main.vue`
```vue
<script>
export default {
  created() {
    window.hello = (param) => {
      console.log(param); // hello world
    }
  },
}
</script>
```
`任意脚本位置`
```ts
import {callVueMethod} from "@/utils/webviewUtil";
/**
 * 传参测试
 */
function callVueHello() {
    callVueMethod('hello','hello world');
}
```