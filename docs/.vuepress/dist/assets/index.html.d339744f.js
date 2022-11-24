import{_ as p,r as c,o,c as i,b as s,a,d as t,e}from"./app.65cf1522.js";const l={},u=a("h1",{id:"项目逻辑",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#项目逻辑","aria-hidden":"true"},"#"),t(" 项目逻辑")],-1),r=a("h2",{id:"流程图",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),t(" 流程图")],-1),d=e(`<div class="custom-container tip"><p class="custom-container-title">提示</p><p>下面会对流程中的每个步骤进行详细的说明</p></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3><p>可以理解为页面，比如公招页面，基建页面，主界面。根据关键字判断是在哪个页面，再执行对应的action逻辑操作。所有的路由在<code>src/router/</code></p><p>一个简单的路由如下</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span> 描述这个路由是什么
     */</span>
    describe<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span> 页面判断关键字
     */</span>
    keywords<span class="token operator">:</span> RouterKeywords
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span> 页面处理逻辑
     */</span>
    action<span class="token operator">:</span> RouterAction
<span class="token punctuation">}</span>

<span class="token keyword">const</span> main<span class="token operator">:</span> Route<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        describe<span class="token operator">:</span> <span class="token string">&#39;明日方舟开始的start界面&#39;</span><span class="token punctuation">,</span>
        keywords<span class="token operator">:</span> <span class="token punctuation">{</span>
            include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;CADPAVer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;网络检测&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;清除缓存&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">clickCenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        describe<span class="token operator">:</span> <span class="token string">&#39;明日方舟登录开始唤醒界面&#39;</span><span class="token punctuation">,</span>
        keywords<span class="token operator">:</span> <span class="token punctuation">{</span>
            include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;鹰角网络&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;开始唤醒&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;账号管理&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;用户协议&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>ocrResult<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">clickByHrOcrResultAndText</span><span class="token punctuation">(</span>ocrResult<span class="token punctuation">,</span> <span class="token string">&#39;开始唤醒&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理逻辑规范" tabindex="-1"><a class="header-anchor" href="#处理逻辑规范" aria-hidden="true">#</a> 处理逻辑规范</h3><p>由于某些操作会发送请求，而由于网络的不稳定性，不能简单的用延时几秒来处理这个路由。所以一个路由的操作一般都是点击触发请求之后就结束了。剩余的操作由下次截图路由处理。</p><p>举个栗子,假如我想要开始唤醒之后，直接点击公开招募</p><p>错误的写法❌</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> main<span class="token operator">:</span> Route<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        describe<span class="token operator">:</span> <span class="token string">&#39;明日方舟登录开始唤醒界面&#39;</span><span class="token punctuation">,</span>
        keywords<span class="token operator">:</span> <span class="token punctuation">{</span>
            include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;鹰角网络&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;开始唤醒&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;账号管理&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;用户协议&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>ocrResult<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">clickByHrOcrResultAndText</span><span class="token punctuation">(</span>ocrResult<span class="token punctuation">,</span> <span class="token string">&#39;开始唤醒&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 这里延时2秒来作为loading的时间，是不合理的，错误的，因为网络不稳定，可能会导致延时不够</span>
            <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token comment">// 导致下面的点击公开招募在没进入主界面之后就提前触发了</span>
            <span class="token keyword">await</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&#39;公开招募的坐标&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确的写法✔️</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> main<span class="token operator">:</span> Route<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        describe<span class="token operator">:</span> <span class="token string">&#39;明日方舟登录开始唤醒界面&#39;</span><span class="token punctuation">,</span>
        keywords<span class="token operator">:</span> <span class="token punctuation">{</span>
            include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;鹰角网络&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;开始唤醒&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;账号管理&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;用户协议&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>ocrResult<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">clickByHrOcrResultAndText</span><span class="token punctuation">(</span>ocrResult<span class="token punctuation">,</span> <span class="token string">&#39;开始唤醒&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        describe<span class="token operator">:</span> <span class="token string">&#39;明日方舟主界面&#39;</span><span class="token punctuation">,</span>
        keywords<span class="token operator">:</span> <span class="token punctuation">{</span>
            include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;档案&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;采购中心&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;公开招募&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;干员寻访&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;任务&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;基建&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;好友&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>ocrResult<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">clickByHrOcrResultAndText</span><span class="token punctuation">(</span>ocrResult<span class="token punctuation">,</span> <span class="token string">&#39;公开招募&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意动画效果延时 ❗</p><p>虽然点击home按钮，再点击首页按钮。这两个操作之间没有发送请求，可以连续操作，但是请注意给个延时。点击home按钮之后会有几百毫秒的下拉动画的。不延时直接连续点击是点不到的</p>`,15),k=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 点击家按钮，再点击首页
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">backHomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 点击home按钮</span>
    <span class="token keyword">await</span> <span class="token function">clickHome</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 等待下拉动画</span>
    <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token comment">// 点击首页</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">0.0733</span> <span class="token operator">*</span> <span class="token punctuation">(</span>deviceInfo<span class="token punctuation">.</span>longSide <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">0.389</span> <span class="token operator">*</span> <span class="token punctuation">(</span>deviceInfo<span class="token punctuation">.</span>shortSide <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">点击首页</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">click</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">点击了坐标</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><h3 id="主要代码" tabindex="-1"><a class="header-anchor" href="#主要代码" aria-hidden="true">#</a> 主要代码</h3><p><code>src/main/index.ts</code> 初始化一些设备信息，一些常用对象等。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否开启无障碍判断</span>
    <span class="token comment">// 初始化</span>
    <span class="token comment">// 初始化未找到路由页面的次数</span>
    <span class="token comment">// 请求截图权限</span>
    <span class="token comment">// 创建OCR对象</span>
    <span class="token comment">// 启动游戏</span>
    <span class="token comment">// .......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src\\utils\\commonUtil.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 初始化设备信息
 */</span>
<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">/*因为竖屏和横屏下，宽高值不一样所以统一成下面的的长边和短边*/</span>
    <span class="token comment">// 设备长边</span>
    <span class="token comment">// 设备短边</span>
    <span class="token comment">// 截屏之后，图片中间被等比缩小的小图高度</span>
    <span class="token comment">// 截屏之后，图片中间被等比缩小的小图宽度</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是小图" tabindex="-1"><a class="header-anchor" href="#什么是小图" aria-hidden="true">#</a> 什么是小图？</h3><p>模拟器截屏的时候有个很操蛋的问题，无论你是横屏还是竖屏，截屏之后图片都是竖屏的,如下所示。</p>`,9),v=e(`<p>这就导致了一个问题，截图之后文字识别的时候坐标会对应不上。为了解决这个问题，所以需要把中间实际的<code>小图</code>截出来，然后再进行文字识别。这就是<code>小图</code>的由来。</p><p><code>src/main/index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> <span class="token comment">// 主程序中调用截图</span>
<span class="token keyword">const</span> capture <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">captureAndClip</span><span class="token punctuation">(</span>capturer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src\\utils\\imageUtil.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 截屏并截取中间小图部分
 * <span class="token keyword">@param</span> <span class="token parameter">screenCapturer</span> 请求截图权限返回的对象
 * <span class="token keyword">@return</span> 截取后的小图
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">captureAndClip</span><span class="token punctuation">(</span>screenCapturer<span class="token operator">:</span> ScreenCapturer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Image<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 截图</span>
    <span class="token comment">// 裁剪</span>
    <span class="token comment">// 释放截图对象</span>
    <span class="token comment">// 返回裁剪后的图片对象</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小图的坐标怎么办" tabindex="-1"><a class="header-anchor" href="#小图的坐标怎么办" aria-hidden="true">#</a> 小图的坐标怎么办？</h3><p>小图坐标和大图比例是一样的，所以实际的坐标可以计算出来。</p><p><code>src\\utils\\point.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 根据裁剪后的小图中的坐标，返回原来大图中对应的坐标
 * <span class="token keyword">@param</span> <span class="token parameter">smallX</span> 小图中的x坐标
 * <span class="token keyword">@param</span> <span class="token parameter">smallY</span> 小图中的y坐标
 */</span>
<span class="token keyword">function</span> <span class="token function">calOriginalPoint</span><span class="token punctuation">(</span>smallX<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> smallY<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Point <span class="token punctuation">{</span>
    <span class="token keyword">const</span> originalX <span class="token operator">=</span> deviceInfo<span class="token punctuation">.</span>longSide <span class="token keyword">as</span> <span class="token builtin">number</span> <span class="token operator">/</span> <span class="token punctuation">(</span>deviceInfo<span class="token punctuation">.</span>smallWidth <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">*</span> smallX
    <span class="token keyword">const</span> originalY <span class="token operator">=</span> deviceInfo<span class="token punctuation">.</span>shortSide <span class="token keyword">as</span> <span class="token builtin">number</span> <span class="token operator">/</span> <span class="token punctuation">(</span>deviceInfo<span class="token punctuation">.</span>smallHeight <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">*</span> smallY
    <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> originalX<span class="token punctuation">,</span> y<span class="token operator">:</span> originalY<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="是否有流程没完成" tabindex="-1"><a class="header-anchor" href="#是否有流程没完成" aria-hidden="true">#</a> 是否有流程没完成</h2><h3 id="主要代码-1" tabindex="-1"><a class="header-anchor" href="#主要代码-1" aria-hidden="true">#</a> 主要代码</h3><p><code>src\\main\\index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取可用的路由列表</span>
        <span class="token keyword">const</span> gameRouter <span class="token operator">=</span> <span class="token function">getGameRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果路由为空</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gameRouter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 停止循环</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否完成判断" tabindex="-1"><a class="header-anchor" href="#是否完成判断" aria-hidden="true">#</a> 是否完成判断</h3>`,14),m=e(`<p>上图中四个switch开关就是与这里的值绑定的，关闭代表流程没完成。开启代表流程已完成</p><p><code>src\\state\\index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @Description: 游戏信息
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GameInfo</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * @Description: 是否公招结束 默认false
     */</span>
    isPublicRecruitEnd<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否采购中心结束。默认false
     */</span>
    isPurchaseEnd<span class="token operator">:</span><span class="token builtin">boolean</span>

    <span class="token doc-comment comment">/**
     * 是否访问好友结束。默认false
     */</span>
    isFriendHomeEnd<span class="token operator">:</span><span class="token builtin">boolean</span>

    <span class="token doc-comment comment">/**
     * 是否基建流程结束。默认false
     */</span>
    isConstructionEnd<span class="token operator">:</span><span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> gameInfo<span class="token operator">:</span> GameInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
    isPublicRecruitEnd<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isPurchaseEnd<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    isFriendHomeEnd<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    isConstructionEnd<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="流程顺序" tabindex="-1"><a class="header-anchor" href="#流程顺序" aria-hidden="true">#</a> 流程顺序</h3><p><code>sort</code>:流程排序,数字越小越优先执行</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> tasks<span class="token operator">:</span> <span class="token constant">TASKS</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&#39;publicRecruit&#39;</span><span class="token punctuation">,</span>
        flagKey<span class="token operator">:</span> <span class="token string">&quot;isPublicRecruitEnd&quot;</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;公开招募&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;公开募&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        sort<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&#39;purchase&#39;</span><span class="token punctuation">,</span>
        flagKey<span class="token operator">:</span> <span class="token string">&quot;isPurchaseEnd&quot;</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token string">&#39;采购中心&#39;</span><span class="token punctuation">,</span>
        sort<span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&#39;friendHome&#39;</span><span class="token punctuation">,</span>
        flagKey<span class="token operator">:</span> <span class="token string">&quot;isFriendHomeEnd&quot;</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token string">&#39;好友&#39;</span><span class="token punctuation">,</span>
        sort<span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&#39;construction&#39;</span><span class="token punctuation">,</span>
        flagKey<span class="token operator">:</span> <span class="token string">&quot;isConstructionEnd&quot;</span><span class="token punctuation">,</span>
        text<span class="token operator">:</span> <span class="token string">&#39;基建&#39;</span><span class="token punctuation">,</span>
        sort<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="截屏并且识别文字" tabindex="-1"><a class="header-anchor" href="#截屏并且识别文字" aria-hidden="true">#</a> 截屏并且识别文字</h2><p><code>src/main/index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
    <span class="token comment">// 延迟截图</span>
    <span class="token comment">// 截图</span>
    <span class="token comment">// 文字识别</span>
    <span class="token comment">// 将ocr结果中的文字拼接成字符串</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由匹配" tabindex="-1"><a class="header-anchor" href="#路由匹配" aria-hidden="true">#</a> 路由匹配</h2><p><code>src/main/index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
    <span class="token comment">// 遍历路由</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 判断路由列表中是否有匹配的</span>
            <span class="token comment">// 如果匹配成功</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">// 没找到累计改为0</span>
                    <span class="token comment">// 执行路由中的对应操作</span>
                    <span class="token keyword">await</span> route<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 结束遍历路由</span>
                <span class="token punctuation">}</span>
            <span class="token comment">// 匹配不成功</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 没找到累计加1</span>
                <span class="token comment">// 如果没找到累计大于等于容错次数</span>
                    <span class="token punctuation">{</span>
                        <span class="token comment">// 运行结束</span>
                    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(g,y){const n=c("Mimg");return o(),i("div",null,[u,r,s(n,{src:"logic/img.png"}),d,s(n,{src:"logic/img_1.png",width:"300"}),k,s(n,{src:"logic/img2.jpg",width:"300"}),v,s(n,{src:"logic/img_2.png",width:"700"}),m])}const w=p(l,[["render",b],["__file","index.html.vue"]]);export{w as default};
