# Vue

VPN：[https://www.cryxr.xyz/#/plan](https://www.cryxr.xyz/#/plan)

vue是一个渐进式的web前端开发框架。

http://cn.vuejs.org

# 基础API和常用语法

## 常见的指令

- v-model
  
    作用是实现表单项和data数据的双向绑定，是一个语法糖，相当于绑定了change事件和value属性
    
- v-show
  
    控制标签的显示和隐藏，操作display属性
    
- v-if
  
    控制标签的显示和隐藏，会直接删除或插入标签
    
- v-for
  
    循环指令
    
    v-for=“(item,index) in xx”
    
    item表示循环的每一项
    
    index表示索引
    
    item和index都是形参，可以叫其他的名字
    
    v-for可以循环字符串，数字，对象，数组
    
- v-bind
  
    作用是绑定属性，v-bind可以简写为:
    
- v-on
  
    作用是绑定事件，v-on可以简写为@
    
    vue中绑定事件的时候直接写事件名字
    
    按键修饰符：键盘事件可以添加按键修饰符，常见的有：enter，alt，ctrl，shift，esc,stop
    
- v-html
  
    相当于原生js中的innerHTML
    
    v-text
    
    相当于原生js中的innerText
    

## 常见的API和语法

- 过滤器
  
    对数据做过滤展示
    
- 计算属性
    - computed
      
        当依赖的数据改变之后重新计算一个结果，计算属性有缓存功能。当依赖项不发生改变的时候不会重新执行
        
        计算属性和方法调用有什么区别
        
        1. 计算属性有缓存功能，当依赖的数据不改变的时候不会重新执行
        2. 方法调用在页面刷新的时候每一次都会触发
        3. 方法调用需要加括号
- watch监听
  
    监听，作用是监听一个数据改变，当数据改变之后执行一个处理函数
    

## 组件和组件传参

组件就是一个独立功能的封装，在代码中表现为自定义封装。

### 组件定义

组件定义需要注意的事项：

1. 每一个组件的html标签只能有一个根节点
2. 组件的data必须是一个function，返回一个对象作为组件的值

组件定义有两种方式

- 局部组件
  
    在使用时需要先注册
    
- 全局组件
  
    定义好之后可以直接使用，不需要注册
    

### 组件传参

- 父传子
- 子传父
- 非相关组件

---

### 动态组件

vue中有一个component节点，表示动态组件，可以通过设置is属性表示当前展示的内容

### keep alive

作用是当组件切换不显示的时候组件被缓存起来，不会销毁。当配合keep-alive使用的时候，组件会多出来两个周期钩子函数

### 插槽

插槽相当于占位符。通过它可以让我们的组件更加的便于定制展示。  slot 

## 组件的生命周期

### 正常组件的生命周期

生命周期钩子函数，是在组件存在的过程中执行的一些内置回调函数

```jsx
创建阶段
	beforeCreate   创建之前
	created  创建完成，比较重要，组件初始化的时候主要是在这里调接口取数据
挂载阶段
	beforeMount  挂载之前
	mounted  挂载完成，比较重要，可以获取组件的dom元素
更新阶段
	beforeUpdate  更新之前
	updated  更新完成
	更新阶段的钩子函数是在组件生命周期中重复执行的
销毁阶段
	beforeDestroy  销毁之前
	destroyed  销毁完成
除了更新之外的其他钩子函数都是只执行一次的
```

[https://cn.vuejs.org/v2/guide/instance.html#生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

![Untitled](https://cn.vuejs.org/images/lifecycle.png)



### 嵌套组件的生命周期

如果组件出现嵌套，那么会在执行父组件的挂载之前的钩子函数之后，会执行所有子组件的创建到挂载完成的生命周期的钩子函数。当所有的子组件都挂载完成之后，父组件执行挂载完成。

### 全局api

- $refs
  
    获取设置了ref属性的标签，可以通过这个属性操作子组件【面试点】
    
- $el
  
    获取当前组件的dom元素
    
- $nextTick
  
    获取dom元素中最新的数据。页面中的dom元素更新是异步的，我们下一次dom更新之后会触发nextTick这个回调函数【面试点】
    
- $parent 和 $root
  
    parent表示组件的上一层
    
    root表示根节点
    
    ### 虚拟DOM和数据双向绑定的原理
    
- 虚拟dom
  
    就是一个用js对象表达的dom结构，最终会被解析成真实的dom展示在页面上
    
- 数据双向绑定的原理和diff算法
  
    vue2中实现数据双向绑定是基于对象的方法Object.defineProperty，通过劫持它的set和get方法
    
    vue3是实现数据双向绑定时基于Proxy这个新方法实现的
    
    diff算法是一个数据结构中的比较算法，我们用它在虚拟dom中做节点比较 。它是进行逐层比较，如果当前层的节点发生改变，那么就直接删除整个节点进行替换
    

# 脚手架项目和单文件组件

[https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/)

## 脚手架搭建项目

@vue/cli 脚手架

```jsx
npm install -g @vue/cli //安装脚手架

//如果是mac
sudo npm i @vue/cli -g //使用管理员权限安装
```

创建项目

```jsx
vue create xxx //创建一个vue项目
```

### 单文件项目

.vue 在一个文件中包含了当前组件的所有代码，包含了页面和逻辑已经css代码。浏览器是不认识vue文件的，脚手架内置了webpack插件可以自动解析vue文件为js+css+html代码 

webpack是一个前端模块化开发打包工具，可以实现前端模块化开发。webpack内置了很多loader（加载器），作用是解析文件。vue-loader是vue文件的加载器。

[https://www.webpackjs.com/](https://www.webpackjs.com/)

## 项目和常用插件

### 常用插件

- 路由
  
    Vue Router 路由插件
    
    路由就是实现页面跳转，当用户访问不同的路径的时候展示不同的页面
    
    路由需要安装3.x版本
    
    ```jsx
    npm i vue-router@3  //安装指定版本的路由
    ```
    
    - 当我们使用了路由插件之后，可以在组件中使用router-link和router-view
    
    - router-view
      
        - 路由对应的组件展示的位置
        
    - router-link
        - 会生成挑战链接。有一个很重要的属性to，表示跳转的位置。to有两种写法：
            - 字符串
            - 对象，建议使用 跳转的时候建议用name不建议用path
                - name
                - path
                - query  传参数，会自动的拼接在url后面，使用？分割。这种参数在页面刷新后不会消失
                - params 传参数，这种传参数的方式参数刷新之后会消失。如果想让参数不消失，需在路由中配置占位符。加了占位符的路由叫动态路由。
                
                **面试的时候常常会问query和params传参的区别：query传参，页面刷新之后参数不会消失；params传参，页面刷新之后参数会消失，如果想让参数保存，需要在路由的路径中配置占位符。**
        
    - route和router
      
        $route 是全局api，可以在组件中获取路由的参数信息
        
        $router是全局api，可以获取全局的路由对象，实现编程式跳转（写代码跳转）
        
    - 404
    
        ```js
        ...
        {
        	path:'*',
            name:'PageNotFound',
            components:()=>import ('....')
        }
        ...
        ```
    
        
    
    - component和components
    
        component的值为一个组件的信息
    
        components的值为一个对象，可以指定多个组件，在一个页面中进行显示
    
        components的属性名对应router-view的name属性，属性值对应展示的组件
    
    - redirect
    
        表示重定向
    
    - alias
    
        表示别名
    
    - children
    
        实现路由嵌套，值为一个路由对象组成的数组。
    
    - 路由权限判断和路由守卫
    
        - beforeEach
    
            每一个路由跳转之前执行
    
        - afterEach
    
            每一个路由跳转之后执行
    
        - meta
    
            元属性，可以配置在路由中，用来传递自定义参数
    
- vant

    一个基于vue的移动端ui组件库

    ```bash
    npm i vant@latest-v2 -S #安装vant组件库
    ```

- Vuex

    Vuex是一个vue的全局状态管理插件，是做全局数据共享的。

    单向数据流：我们在View视图中通过dispatch派发一个action改变数据，数据改变之后视图重新渲染

    [什么是vuex](https://v3.vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%A8%A1%E5%BC%8F)

    ![](https://v3.vuex.vuejs.org/flow.png)

    Vuex中的核心功能，有五部分：

    * state

      数据

    * actions

      行为，所有的异步操作都在这里进行。action中也能改变数据，但是不推荐这么做。

      因为vuex中所有的数据改变都需要可以被追踪到，所以数据改变都需要在mutations中进行。

    * mutations

      改变数据

    * modules

      模块化拆分

    * getters

      相当于vuex中的计算属性

    Vuex中的数据流向

    ![vuex中的数据流向](https://v3.vuex.vuejs.org/vuex.png)

    我们在组件中派发一个action，在action中调接口获取数据，获取数据完成之后，commit提交一个mutation进行数据改变，数据改变之后组件重新渲染。

    安装vuex

    ```bash
    npm i vuex@3 #vue2的项目中需要安装3.x的版本
    ```

    vuex中使用mapXXX方法把数据或者方法进行映射。

    ```js
    import { mapState } from "vuex";
    //mapState可以接受的参数有两种方式
    //1.数组，每一个需要映射的vuex中的state的属性名
    //2.对象，属性名为映射之后的别名，属性值为vuex中state的属性名
    //mapState可以接受两个参数，参数一表示命名空间（模块名），参数二表示映射的数据
    //如果不加映射空间，表示映射根节点里面的数据
    computed:{
        ...mapState(['count','name']),
        ...mapState({
            aaa:'count'
        }),
        ...mapState("product",{
            pName:'name'
        })
    }
    ```

    

- Element UI

    是饿了么团队出的一款ui组件库，主要是针对pc端页面的。是我们学习vue开发一定要会的一款组件库。

    [Element UI ](https://element.eleme.cn/#/zh-CN)

    安装依赖

    ```ba
    npm i element-ui -S 
    ```

    [管理后台模板](https://github.com/PanJiaChen/vue-admin-template)
    
    