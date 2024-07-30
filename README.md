# Weapp Util

🌞 为微信小程序定制的工具函数

> 更多微信小程序开发工具，查看 [微信小程序开发全家桶](https://www.liiiiiiu.com/dev/weapp-dev-bucket)

## 安装

```bash
npm i weapp-util
```

> 注意：在小程序中使用npm包前，需先[构建 npm](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 使用

```javascript
// index.js
import util from 'weapp-util'

// 判断传入值是否为字符串
util.isString('1') // true
// 判断传入值是否为数值
util.isNumber(1) // true
// 判断传入值是否为整数
util.isInteger(1) // true
// 判断传入值是否为正整数
util.isPositiveInteger(1) // true
// 判断传入值是否为浮点数
util.isFloat(1.1) // true
// 判断传入值是否为正浮点数
util.isPositiveFloat(1.1) // true
// 判断传入值是否为布尔值
util.isBoolean(true) // true
// 判断传入值是否为数组、类数组、arguments
util.isArray([]) // true
// 判断传入值是否为对象类型
util.isObject(new Map()) // true
// 判断传入值是否为 `{}`
util.isPlainObject({}) // true
// 判断传入值是否为 `Symbol` 类型
util.isSymbol(Symbol(1)) // true
// 判断传入值是否为函数类型
util.isFunction(() => {}) // true
// 判断传入值是否为 `NaN`
util.isNaN(NaN) // true
// 判断传入值是否为 `undefined`
util.isUndefined(undefined) // true
// 判断传入值是否为 `null`
util.isNull(null) // true
// 判断传入值是否为 `Error` 类型
util.isError(new Error) // true
// 判断传入的年份是否为闰年
util.isLeapYear(2024) // true
// 判断传入值是否为邮箱
util.isEmail('123@qq.com') // true
// 判断传入值是否为 URL
util.isUrl('https://www.abc.com') // true
// 判断传入值是否为国内手机号
util.isCnPhoneNumber(18888888888) // true
// 判断传入值是否为国内身份证号码
util.isCnIdCard(111222333444555666) // false
// 判断传入值是否为假值
util.isFalsy(0) // true
// 比较两个值是否相等
util.isEqual(['1', '2', [3, 4, [5]]], ['1', '2', [3, 4, [5]]]) // true

// 将传入值转换为字符串
util.toString(1) // '1'
// 将传入值转换为数值
util.toNumber('1') // 1
// 将传入值转换为整数
util.toInteger('1.5') // 1
// 将传入值转换为 1~2 位浮点数
util.toFloat(1.256) // 1.25
// 将传入值转换为布尔值
util.toBoolean(0) // false
// 将传入值转换为数组
util.toArray(1) // [1]
// 将传入值转换为 `Symbol`
util.toSymbol(1) // Symbol(1)
// 将传入值转换为 `undefined`
util.toUndefined(1) // undefined
// 将传入值转换为 `null`
util.toNull(1) // null
// 将传入的中文首字母转为拼音
util.toCnLetter('你好') // ['NH']
// 将传入值转换为原始值
util.toOriginal('true') // true
// 人民币元转分
util.toCnCent(1.567) // 156
// 人民币分转元
// 要使用分转元，第二个参数需设为 false，第三个参数需设为 true，第四个参数用于判断保留1位还是2位小数
util.toCnCent(156, false, true) // '1.56'
// 将传入值的首字母改为大写
util.toTitle('welcome') // 'Welcome'
// 将传入值转换为百分比
util.toPercentage(0.1) // 10%
// 将传入值进行千分位格式化
util.toThousands(1234567) // 1,234,567

// 生成 uuid
util.genUuid() // '3e479fc2-ab2e-42bc-85f3-c592be4e0cb4'
// 生成随机整数
util.genRandomInteger() // 3

// 数据深拷贝
util.cloneDeep([1, 2, 3]) // [1, 2, 3]

// 解析按钮传递的 `event` 值
// <button data-id="{{ 1 }}" data-age="{{ 12 }}" bindtap="onClick" />
function onClick(e) {
  let id = util.parseDataset(e, 'age') // 12
}

// 接口同步写法
const res = util.apiPromisify(wx.getImageInfo)({ src: '' })
// 等同于
// wx.getImageInfo({
//   src: '',
//   success: res => {}
// })

// 获取图片信息的同步写法
const res = await util.getImageInfo(path)

// 执行当前页面栈的指定事件
// 已打开的页面中如果有 `getList` 函数就会执行
util.triggerEvent('getList')
util.triggerEvent('getList', {
  // 传递给页面栈事件的值
  detail: {
    id: 1
  },
  // 排除的页面栈索引值
  // 最后一个页面不执行该事件
  exclude: [-1]
})
```
