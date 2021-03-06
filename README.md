## 重学 React
[参考资料: Reac.js 小书 by 胡子大哈](http://huziketang.mangojuice.top/books/react/)
组件化可以帮助我们解决前端结构的复用性问题，整个页面可以由这样的不同的组件组合、嵌套构成。

### 01 使用 React
1. 下载 `react`, `react-dom`
2. 导入 `react`, `react-dom`

`react` 编写 React 组件需要，`react-dom` 将 React 组件渲染到页面上

#### JSX
类似 HTML 的语法，直接写在 React 组件中。包含 JavaScript 的对象树。

JSX 就是 JavaScript 对象。

#### render
React 中的一切皆是组件。组件一般都需要继承 Component，创建 render 方法，render 方法必须返回一个 JSX 对象。

render 方法返回的 JSX 只能有一个根元素。

**可以插入表达式**
可以使用 `{}` 包裹起来，表达式返回的结果就会渲染到页面上。可以是变量、表达式计算，函数执行，表达式可以插入在标签内部，也可以在标签的属性上使用

> Note
在 JavaScript 中，class 是一个保留字，所以无法在 React 中使用，要使用 className

**条件返回**
可以使用表达式，也就代表可以根据表达式的值，返回不同的内容。

如果在表达式中返回 null，那么什么内容都不会展示。

### 02 组件嵌套、组合与组件树
自定义的组件都需要用大写，普通的 HTML 标签都要用小写。

### 03 事件监听
给需要监听的组件添加属性，React 已经帮助我们封装好了 on* 的属性，也不用担心兼容问题。on* 的事件监听只能用于 HTML 标签上面，不能在组件标签上面使用。事件监听函数会传入一个 event 对象。

**事件中的 this**
事件中的 this 不指向实例本身，而是 undefined。如果需要指向组件，需要在调用时进行绑定
``` jsx
<img
   onClick={this.handleClickOnImage.bind(this)}
   src={logo}
   className="App-logo"
   alt="logo"
/>
```

### 组件中的 state 和 setState
一个组件的显示形态是可以由它数据状态和配置参数决定的。一个组件可以拥有自己的状态，状态可以是变化的。在 React 中称之为 state

setState 由 Component 提供，调用这个函数时，会更新组件的状态，并且重新调用 render 方法，然后把 render 方法渲染的最新内容显示在页面上。不能直接使用 `this.state = xx`，如果这样修改，React 就不会知道 state 进行了修改。setState 接收一个对象或者函数作为参数。
- 使用对象作为参数时，只需要传入需要更改的部分，不用传入整个对象
- 使用函数作为参数时，函数参数需要传入前一个 state，返回一个新的 state，一个操作中，多次调用 setState 更新，组件只会渲染一次，React 会把消息对象的 setState 进行合并，然后再渲染组件。不用担心 setState 带来的性能问题。

### 组件中的 props
props 是组件的属性，让组件可以配置，在其他的地方使用。每个组件都可以接受一个 props 参数，它是一个对象，包含了对这个组件的配置。

在组件的内部使用 `this.props.name` 来使用组件。在组件的外部，直接在标签上面设置属性名，所有的属性都会当作 props 对象的键值。

组件的 props 可以是任何类型的，字符串，数字，对象，数组，甚至是函数。

设置默认的 props 可以在组件内声明 defaultProps，也可以在使用组件的时候设置 props。一旦 props 传入进来，就不能修改。如果修改，可以通过设置函数 props，在函数 props 中修改组件的 state 或者通知父组件修改。

### state vs props
**State 的主要作用是用于组件保存、控制、修改自己的可变状态。在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。State 是一个局部的，只能被自身控制的数据源。**

**Props 的作用是让组件的父组件传递参数进行配置。是外部传递进来的配置参数，组件内部无法修改，除非外部组件传入新的 props，否则组件的 props 不变。**

拥有 state 的组件称之为 stateful 组件，没有state 的组件称之为 stateless 组件。状态会带来管理的复杂性，所以要尽量多的使用无状态组件。

### 渲染列表数据
如果在 {} 中放入一个数组，React 会帮你把数组里面的元素一个个罗列出来。
所以可以使用 map 渲染数据列表。使用时需要添加一个 key，为元素的唯一标识符。

### 状态提升
将这种组件之间共享的状态交给组件最近的公共父节点保管，这种方式称为状态提升。

当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为。

使用 props 传递函数的例子：
App handleDelete(index)
   List<Comment> onDeleteComment(index) handleDeleteComment
      Comment onClick={this.handleClick.bind(this)} handleDelete

### 生命周期
React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载

**React 挂载阶段的生命周期：**
-> constructor()
-> componentWillMount()
-> render()
// 然后构造 DOM 元素插入页面
-> componentDidMount()
// ...
// 即将从页面中删除
-> componentWillUnmount()
// 从页面中删除

state 的初始化工作放在 constructor 里面，在 componentWillMount 里面进行组件的启动工作，如发起网络请求，设置定时器，组件销毁的时候需要将定时器清理掉，在 componentWillUnmount 里面处理。

依赖于 DOM 的工作需要放在 componentDidMount 中里面进行。

**更新阶段的生命周期**
shouldComponentUpdate(nextProps, nextState) 如果返回 false 不更新
componentWillReceiveProps(nextProps) 组件从父组件接收到新的 props 前调用
componentWillUpdate()：组件开始重新渲染之前调用。
componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。

### ref 和 React 中的 DOM 操作
在 React 中基本上不需要和 DOM 直接打交道，但又几种情况需要使用 DOM，如：进入页面后自动聚焦，需要使用 `input.focus()`，如果想动态获取 DOM 元素的尺寸

React 提供了 ref 属性来帮我们获取已挂载元素的 DOM 结点，可以给某个 jsx 元素加上 ref 属性。
ref 属性是一个函数，在函数中可以把 DOM 元素设置为组件实例的一个属性，之后就可以获取 DOM 元素。
组件也可以使用 ref，但不推荐这么做
```js
<input ref={(input) => this.input = input} />
this.input.focus()
```

### props.children 和容器类组件
使用自定义组件时，所有嵌套在组件中的 jsx 结构都可以通过组件的 props.children 属性获得。

### propTypes 和组件参数验证
在使用 React 构建大型应用时，推荐使用 propTypes 构建，可以给组件的配置添加上类型验证，如果传入的类型不对，浏览器会报错，使用 js 编写不会报错，如果使用 TypeScript 会报错。

### 命名建议
组件的私有方法使用 `_` 开头，所有的监听方法使用 `handle` 开头，把监听方法传递给组件的时候，属性名用 `on`。

组件的编写顺序：
- static 开头的类属性，如 defaultProps、propTypes。
- 构造函数，constructor。
- getter/setter（还不了解的同学可以暂时忽略）。
- 组件生命周期。
- _ 开头的私有方法。
- 事件监听方法，handle*。
- render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
- render() 方法。

### 高阶组件
高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。高阶组件就是为了代码复用，组件可能存在着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中复用，高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。

就是设计模式中的装饰者模式，通过组合的方法达到很高的灵活程度。

### Context
Context 相当于组件树上的某颗子树的全局变量。context 至少能往下传递，不能往上传递。

使用 context 时，需要在组件中声明 `childContextTypes`，设置 context 的类型，然后使用 `getChildContext` 获取返回的对象。然后在组件中使用 `this.context.some` 使用

context 中的数据是可以随意修改的

### Redux 的原理
Redux 与 React-redux 并不是一个东西。Redux 是一种架构模式，不关注使用什么库，可以应用到 React Vue，甚至是 jQuery。

为什么需要 Redux？模块/组件之间需要共享数据，但是数据可能被任意修改导致不可预料的结果。

设置一条规则：模块组件之间可以共享数据，也可以更改数据，但是要提前月订，这个数据不能直接修改，只能执行某些允许的修改，而且必须显式的通知调用修改。

为此，Redux 中有 `dispatch` 负责数据的修改。
```js
function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}
```
所有的数据操作必须通过 dispatch 函数，接收一个参数 action，这个 action 是一个普通的 js 对象，里面必须包含一个 type 字段来声明目的，dispatch 在 switch 里面会识别这个 type 字段，能够识别出来的操作才能执行 state 的更改。action 中除了 type 字段是必须的之外，其他的字段都是可以自定义的。

store：
   getState 获取 state
   dispatch 发起更改 state 的通知调用，reducer 来更改 state

### Provider
使用高阶组件，将 context 与 pure component 连接起来， 在高阶组件中再将 context 与 redux 连接起来，然后使用一个 mapStateToProps 的方法，将 state 传递给 pure component，同时也可以使用 mapDispatchToProps 传递给 props 给 pure component.

Provider 是一个容器组件，将嵌套的内容原封不动的作为自己的子组件。将外界传递给它的 props.state 放到 context 中，这样子组件就可以使用。

### pure component vs container component
pure component 可预测性强，对 props 以外的数据零依赖，也不会产生副作用。尽量使用 pure component 提高组件的可复用性。

container component 专门做数据相关的应用逻辑，和各种数据打交道，然后把数据通过 props 传递给 pure component。

container componetn 组件可以包含 pure component 和 container component，但是 pure component 尽量不要依赖 container component

最好将组件放在两个目录中，所有的 pure component 放在 components 目录中，所有的 container component 组件放在 containers 目录中。

根据组件是否需要高度复用的，把组件分为 pure 和 container 组件两种类型

container 组件并不意味着完全不能复用，它的复用是依赖场景的，在特定的场景下是可以复用的。而 pure component 是可以跨应用场景复用的。
