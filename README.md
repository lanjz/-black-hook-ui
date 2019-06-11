## Install

`yarn add black-book-ui`

## Quick Start

```javascript
import Vue from 'vue'
import BlackBookUi from 'black-book-ui'

Vue.use(BlackBookUi)
```

## Demo

### Loading组件

显示Loading：`this.$showLoading()`

隐藏Loading：`$hideLoading()`

### Toast组件

```
this.$toast({title: '提示文字'})
```

### Alert组件

```
 this.$alert({
        title: '你有我帅嘛？'
      })
```

参数说明：


- title <String>: 提示标题

- content <String>: 提示内容

- confirmText <String>：确认按钮的文本，默认为"确定"

- cancelText <String>：退出按钮的文本，默认为"取消"

- showCancel <Boolean>：是否显示取消按钮，转为true

- theme：完善中

- type：完善中
