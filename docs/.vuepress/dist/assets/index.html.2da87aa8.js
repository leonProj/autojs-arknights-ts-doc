import{_ as e,r as t,o as p,c,b as o,a as n,d as s,e as i}from"./app.c897fe6e.js";const l={},u=n("h1",{id:"界面交互",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#界面交互","aria-hidden":"true"},"#"),s(" 界面交互")],-1),d=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),r=i(`<p>上图中四个switch开关就是与这里的值绑定的，关闭代表流程没完成。开启代表流程已完成</p><p><code>src\\state\\index.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>vue目录在<code>src/web</code>下，采用vue2+vant2</p></div><h2 id="vue调用脚本" tabindex="-1"><a class="header-anchor" href="#vue调用脚本" aria-hidden="true">#</a> vue调用脚本</h2><h3 id="简单调用" tabindex="-1"><a class="header-anchor" href="#简单调用" aria-hidden="true">#</a> 简单调用</h3><p>vue中通过invoke调用脚本</p><p><code>src/web/main.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 展示日志界面</span>
    <span class="token function">showLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      $autojs<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&quot;show-log&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本中通过handle处理vue的调用</p><p><code>src/main.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">WebActivity</span> <span class="token keyword">extends</span> <span class="token class-name">ui<span class="token punctuation">.</span>Activity</span> <span class="token punctuation">{</span>
    <span class="token function">setupWebView</span><span class="token punctuation">(</span><span class="token parameter">webview</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jsBridge<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">&#39;show-log&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            app<span class="token punctuation">.</span><span class="token function">startActivity</span><span class="token punctuation">(</span><span class="token string">&#39;console&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取返回值" tabindex="-1"><a class="header-anchor" href="#获取返回值" aria-hidden="true">#</a> 获取返回值</h3><p>vue中通过invoke调用脚本</p><p><code>src/web/main.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $autojs<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&quot;created&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tasks <span class="token operator">=</span> param<span class="token punctuation">.</span>tasks<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>gameInfo <span class="token operator">=</span> param<span class="token punctuation">.</span>gameInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">tasks</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">gameInfo</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本中通过handle处理vue的调用,并返回值 <code>src/main.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">WebActivity</span> <span class="token keyword">extends</span> <span class="token class-name">ui<span class="token punctuation">.</span>Activity</span> <span class="token punctuation">{</span>
    <span class="token function">setupWebView</span><span class="token punctuation">(</span><span class="token parameter">webview</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jsBridge<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                tasks<span class="token punctuation">,</span>
                gameInfo
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本调用vue" tabindex="-1"><a class="header-anchor" href="#脚本调用vue" aria-hidden="true">#</a> 脚本调用vue</h2><h3 id="简单调用-1" tabindex="-1"><a class="header-anchor" href="#简单调用-1" aria-hidden="true">#</a> 简单调用</h3><p>vue中将方法挂载到window上 <code>src/web/main.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">stopRun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isStopping <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isRun <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isRun</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// 脚本是否正在运行</span>
      <span class="token literal-property property">isStopping</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// 脚本是否正在停止</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>任意脚本位置</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>callVueMethod<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/webviewUtil&quot;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 停止运行
 */</span>
<span class="token keyword">function</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callVueMethod</span><span class="token punctuation">(</span><span class="token string">&#39;stopRun&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    deviceInfo<span class="token punctuation">.</span>capturer<span class="token operator">?.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h3><p>vue中将方法挂载到window上</p><p><code>src/web/main.vue</code></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello world</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>任意脚本位置</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>callVueMethod<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/webviewUtil&quot;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 传参测试
 */</span>
<span class="token keyword">function</span> <span class="token function">callVueHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callVueMethod</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function k(v,m){const a=t("Mimg");return p(),c("div",null,[u,d,o(a,{src:"logic/img_2.png",width:"700"}),r])}const g=e(l,[["render",k],["__file","index.html.vue"]]);export{g as default};
