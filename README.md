## Install

`yarn add black-book-ui` or `npm install black-book-ui -S` 

## Quick Start

```javascript
import Vue from 'vue'
import BlackBookUi from 'black-book-ui'

Vue.use(BlackBookUi)
```

## 使用

### Loading组件

显示Loading：`this.$showLoading()`

隐藏Loading：`$hideLoading()`

### Toast组件

```
this.$toast({title: '提示文字'})
```
参数说明：

参数|类型|说明|可选值|默认值
--|:--:|--|:--:|:--:
title|String|提示文字|-|-
duration|Number(毫秒)|消失时间|-|1500
type|String|完善中|-|-


### Alert组件

```
 this.$alert({
        title: '你有我帅嘛？'
      })
```

参数说明：

参数|类型|说明|可选值|默认值
--|:--:|--|:--:|:--:
title|String|提示标题|-|-
content|String|提示内容|-|-
confirmText|String|确认按钮的文本|-|"确定"
cancelText|String|退出按钮的文本|-|"取消"
showCancel|Boolean|是否显示取消按钮|true 或 false|true
theme|String|完善中|-|-
type|String|完善中|-|-

### 更多功能还是在添加中...

