# 项目逻辑
## 流程图
<Mimg src="logic/img.png"/>
::: tip 提示
下面会对流程中的每个步骤进行详细的说明
:::
## 路由
### 是什么
可以理解为页面，比如公招页面，基建页面，主界面。根据关键字判断是在哪个页面，再执行对应的action逻辑操作。所有的路由在`src/router/`

一个简单的路由如下

```ts
export interface Route {
    /**
     * @description 描述这个路由是什么
     */
    describe: string
    /**
     * @description 页面判断关键字
     */
    keywords: RouterKeywords
    /**
     * @description 页面处理逻辑
     */
    action: RouterAction
}

const main: Route[] = [
    {
        describe: '明日方舟开始的start界面',
        keywords: {
            include: ['CADPAVer', '网络检测', '清除缓存'],
        },
        action: async function () {
            await clickCenter()
        }
    },
    {
        describe: '明日方舟登录开始唤醒界面',
        keywords: {
            include: ['鹰角网络', '开始唤醒', '账号管理', '用户协议'],
        },
        action: async function ({ocrResult}) {
            await clickByHrOcrResultAndText(ocrResult, '开始唤醒');
        }
    },
]
```
### 处理逻辑规范
由于某些操作会发送请求，而由于网络的不稳定性，不能简单的用延时几秒来处理这个路由。所以一个路由的操作一般都是点击触发请求之后就结束了。剩余的操作由下次截图路由处理。

举个栗子,假如我想要开始唤醒之后，直接点击公开招募

错误的写法:x:
```ts
  const main: Route[] = [
    {
        describe: '明日方舟登录开始唤醒界面',
        keywords: {
            include: ['鹰角网络', '开始唤醒', '账号管理', '用户协议'],
        },
        action: async function ({ocrResult}) {
            await clickByHrOcrResultAndText(ocrResult, '开始唤醒');
            // 这里延时2秒来作为loading的时间，是不合理的，错误的，因为网络不稳定，可能会导致延时不够
            await delay(1000*2)
            // 导致下面的点击公开招募在没进入主界面之后就提前触发了
            await click('公开招募的坐标')
        }
    },
]
```
正确的写法:heavy_check_mark:
```ts
  const main: Route[] = [
    {
        describe: '明日方舟登录开始唤醒界面',
        keywords: {
            include: ['鹰角网络', '开始唤醒', '账号管理', '用户协议'],
        },
        action: async function ({ocrResult}) {
            await clickByHrOcrResultAndText(ocrResult, '开始唤醒');
        }
    },
    {
        describe: '明日方舟主界面',
        keywords: {
            include: ['档案', '采购中心', '公开招募', '干员寻访', '任务', '基建', '好友'],
        },
        action: async function ({ocrResult}) {
            await clickByHrOcrResultAndText(ocrResult, '公开招募');        
        }
    },
]
```
注意动画效果延时 :exclamation:

虽然点击home按钮，再点击首页按钮。这两个操作之间没有发送请求，可以连续操作，但是请注意给个延时。点击home按钮之后会有几百毫秒的下拉动画的。不延时直接连续点击是点不到的
<Mimg src="logic/img_1.png" width="300"/>
```ts
/**
 * 点击家按钮，再点击首页
 */
async function backHomePage() {
    // 点击home按钮
    await clickHome()
    // 等待下拉动画
    await delay(1000)
    // 点击首页
    const x = 0.0733 * (deviceInfo.longSide as number)
    const y = 0.389 * (deviceInfo.shortSide as number)
    console.log(`点击首页`);
    await click(x, y)
    console.log(`点击了坐标${x},${y}`);
}
```

## 初始化
### 主要代码
`src/main/index.ts`
初始化一些设备信息，一些常用对象等。
```ts
async function run() {
    // 是否开启无障碍判断
    // 初始化
    // 初始化未找到路由页面的次数
    // 请求截图权限
    // 创建OCR对象
    // 启动游戏
    // .......
}
```
`src\utils\commonUtil.ts`
```ts
/**
 * @description 初始化设备信息
 */
function init(): void {
    /*因为竖屏和横屏下，宽高值不一样所以统一成下面的的长边和短边*/
    // 设备长边
    // 设备短边
    // 截屏之后，图片中间被等比缩小的小图高度
    // 截屏之后，图片中间被等比缩小的小图宽度
}
```
### 什么是小图？
模拟器截屏的时候有个很操蛋的问题，无论你是横屏还是竖屏，截屏之后图片都是竖屏的,如下所示。
<Mimg src="logic/img2.jpg" width="300"/>
这就导致了一个问题，截图之后文字识别的时候坐标会对应不上。为了解决这个问题，所以需要把中间实际的`小图`截出来，然后再进行文字识别。这就是`小图`的由来。

`src/main/index.ts`
```ts
 // 主程序中调用截图
const capture = await captureAndClip(capturer)
```
`src\utils\imageUtil.ts`
```ts
/**
 * 截屏并截取中间小图部分
 * @param screenCapturer 请求截图权限返回的对象
 * @return 截取后的小图
 */
async function captureAndClip(screenCapturer: ScreenCapturer): Promise<Image> {
    // 截图
    // 裁剪
    // 释放截图对象
    // 返回裁剪后的图片对象
}
```
### 小图的坐标怎么办？
小图坐标和大图比例是一样的，所以实际的坐标可以计算出来。

`src\utils\point.ts`
```ts
/**
 * @description 根据裁剪后的小图中的坐标，返回原来大图中对应的坐标
 * @param smallX 小图中的x坐标
 * @param smallY 小图中的y坐标
 */
function calOriginalPoint(smallX: number, smallY: number): Point {
    const originalX = deviceInfo.longSide as number / (deviceInfo.smallWidth as number) * smallX
    const originalY = deviceInfo.shortSide as number / (deviceInfo.smallHeight as number) * smallY
    return {x: originalX, y: originalY}
}
```
## 是否有流程没完成
### 主要代码
`src\main\index.ts`
```ts
async function run() {
    // ......
    while (true) {
        // 获取可用的路由列表
        const gameRouter = getGameRouter();
        // 如果路由为空
        if (!gameRouter) {
            // 停止循环
        }
    }
    // ......
}
```
### 是否完成判读

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
### 流程顺序 
`sort`:流程排序,数字越小越优先执行
```ts
const tasks: TASKS[] = [
    {
        key: 'publicRecruit',
        flagKey: "isPublicRecruitEnd",
        text: ['公开招募', '公开募'],
        sort: 1
    },
    {
        key: 'purchase',
        flagKey: "isPurchaseEnd",
        text: '采购中心',
        sort: 4
    },
    {
        key: 'friendHome',
        flagKey: "isFriendHomeEnd",
        text: '好友',
        sort: 2
    },
    {
        key: 'construction',
        flagKey: "isConstructionEnd",
        text: '基建',
        sort: 3
    }
]

```
## 截屏并且识别文字

`src/main/index.ts`
```ts
async function run(){
    // ......
    // 延迟截图
    // 截图
    // 文字识别
    // 将ocr结果中的文字拼接成字符串
    // ......
}
```
## 路由匹配
`src/main/index.ts`

```ts
async function run(){
    // ......
    // 遍历路由
        {
            // 判断路由列表中是否有匹配的
            // 如果匹配成功
                {
                    // 没找到累计改为0
                    // 执行路由中的对应操作
                    await route.action();
                    // 结束遍历路由
                }
            // 匹配不成功
            {
                // 没找到累计加1
                // 如果没找到累计大于等于容错次数
                    {
                        // 运行结束
                    }
            }
        }
    // ......
}
```
