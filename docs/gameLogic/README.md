# 游戏处理逻辑
:::tip 提示
所有的游戏处理逻辑，也就是路由的action，全在`src/router`目录下。在此之前请先阅读 [什么是路由](/logic/#是什么)
:::

## 公开招募
### 逻辑
1. 有立即招募，则立即招募。
2. 没有立即招募点击开始招募
3. 没有高星tag，有立即刷新就刷新，没有就随便点一个tag
4. 有高星tag选择高星tag
5. 全部为已招募则公开流程则结束。

### 待办
- 高星tag立即招募
## 好友基建
### 逻辑
1. 访问下位是橘黄色:orange_circle:的，则点击访问下位
   <Mimg src="gameLogic/img.png" width="200"/>
2. 如果变成灰色:black_circle:，则流程结束
   <Mimg src="gameLogic/img_1.png" width="200"/>
## 基建
### 逻辑
1. 是否有小铃铛，有则点击进行批量操作。然后点击可收获，订单交付，干员信赖
   <Mimg src="gameLogic/img_2.png" width="100"/>
2. 没有铃铛，点击进驻总览换人
3. 第一次只换换宿舍的人，如果宿舍有空位或者有人休息完成，则换人。休息中的不换
4. 滚动条到底了，返回基建，再次点击进驻总览换其他建筑的人
5. 第二次换非宿舍的人，
   - 训练室，如果有人涣散了，训练位有人就换协助位，没人则清空协助位； 如果没人涣散，协助位有人 ,但是没人训练， 也直接清空
   - 其他，如果有人涣散了或者有空位置，就换人。在工作中状态的人不换
6. 滚动条到底，则流程结束
### 换人顺序
按照实际需要人数，从序号小的开始往后换人
<Mimg src="gameLogic/img_5.png" width="600"/>
比如有一个人涣散
<Mimg src="gameLogic/img_3.png" width="500"/>
只换涣散的人。被换的人为紧挨着的后面的人。六号位置
<Mimg src="gameLogic/img_4.png" width="400"/>
## 采购中心
### 逻辑
1. 能收取信用就收取信用
2. 没有收取信用就开始购买
3. 有打折的优先买打折的
4. 信用不够买的时候则流程结束
### 购买物品顺序
数组从前往后买
```ts
['招聘许可', '赤金', '技巧概要卷3', '技巧概要卷2', '技巧概要卷1', '龙门币', '加急许可', '聚酸酯', '糖', '家具零件']
```