---
nav:
  title: Watch
  path: /guide
---

## Watch

通过 watch 做一些监听操作，监听组件的状态去做一些事情。

联动逻辑的复杂度通常取决于是否存在以下几种问题：

- 联动类型复杂
  - 一对多联动
  - 多对一联动
  - 多依赖联动
  - 链式联动
  - 联动校验
- 联动过程中存在异步
- 联动过程中存在大量的数据转换逻辑
- ······

### 设计

```
[fieldkey].[fieldProperty]
```

设计此格式进行监听，fieldkey 是字段的 key 值，fieldProperty 是监听的类型，目前仅支持 value 或 visible 两种。
比如监听组件 aa 的值的变化：

```
 "aa.value": ({ value, visible, required, name }) => {
   ...
 }
```

如果监听组件 aa 的显隐状态的变化：

```
"aa.visible": ({ value, visible, required, name }) => {
   ...
 }
```

### 使用

### 一对多联动

<code
  src="./demo/一对多联动.tsx"
  title="解析"
  description="使用 watch 注册联动逻辑，借助路径解析能力实现一对多联动。
  通过 useForm 实例提供的的事件去"
/>

### 多对一联动

<code
  src="./demo/多对一联动.tsx"
  title="案例说明"
  description="使用 watch 注册联动逻辑，借助路径解析能力实现一对多联动。
  通过 useForm 实例提供的的事件去"
/>

### 监听显隐状态

<code
  src="./demo/监听显隐状态.tsx"
  title="案例说明"
  description="通过监听组件 aa 值的变化，对组件 bb 的显隐控制，同时监听组件 bb 的显隐状态的改变，对组件 cc 进行赋值操作。"
/>
