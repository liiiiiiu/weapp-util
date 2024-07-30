import Check from './uitls/check'
import Cast from './uitls/cast'
import makePy from './uitls/local/chinese2py'
import { accMul } from './uitls/calc'

const cast = new Cast()

const check = new Check()

const rint = /^-?\d+$/

const rposInt = /^\d+$/

const rdecimal = /^(-?\d+)([.]\d+){1}$/

const rposDecimal = /^\d+([.]\d+){1}$/

const rmobilephone = /^1[3456789][0-9]{9}$/

const remail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

const rurl = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/

const rcnIdCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/

function isString(value: unknown): boolean {
  return check.str(value)
}

function isNumber(value: unknown): boolean {
  return check.num(value)
}

function isInteger(value: unknown): boolean {
  return check.num(value) && rint.test(value + '')
}

function isPositiveInteger(value: unknown): boolean {
  return check.num(value) && rposInt.test(value + '')
}

function isFloat(value: unknown): boolean {
  return check.num(value) && rdecimal.test(value + '')
}

function isPositiveFloat(value: unknown): boolean {
  return check.num(value) && rposDecimal.test(value + '')
}

function isBoolean(value: unknown): boolean {
  return check.bool(value)
}

function isArray(value: unknown): boolean {
  return check.arr(value)
}

function isArrayLike(value: unknown): boolean {
  return check.arrLike(value)
}

function isObject(value: unknown): boolean {
  return check.obj(value)
}

function isPlainObject(value: unknown): boolean {
  return check.plainObj(value)
}

function isObjectLike(value: unknown): boolean {
  return check.objLike(value)
}

function isSymbol(value: unknown): boolean {
  return check.symbol(value)
}

function isFunction(value: unknown): boolean {
  return check.fun(value)
}

function isNaN(value: unknown): boolean {
  return check.nan(value)
}

function isUndefined(value: unknown): boolean {
  return check.undef(value)
}

function isNull(value: unknown): boolean {
  return check.nul(value)
}

function isError(value: unknown): boolean {
  return check.err(value)
}

function isLeapYear(value: number): boolean {
  if (!check.num(value)) {
    return false
  }

  return ((value % 4 === 0) && (value % 100 !== 0)) || (value % 400 === 0)
}

function isEmail(value: unknown): boolean {
  if (!check.str(value)) {
    return false
  }

  return remail.test(value + '')
}

function isUrl(value: unknown): boolean {
  if (!check.str(value)) {
    return false
  }

  return rurl.test(value + '')
}

function isCnPhoneNumber(value: unknown): boolean {
  return rmobilephone.test(value + '')
}

function isCnIdCard(value: unknown): boolean {
  return rcnIdCard.test(value + '')
}

function isFalsy(value: any): boolean {
  return [false, '', 0, -0, undefined, null, NaN].includes(value)
}

function isEqual(value1?: any, value2?: any, strict: boolean = true): boolean {
  return check.equal(value1, value2, strict)
}

function toString(value: unknown): string {
  return cast.str(value)
}

function toNumber(value: unknown): number {
  return cast.num(value)
}

function toInteger(value: unknown, round: boolean = false): number {
  let newValue = cast.num(value)

  return !round ? parseInt(newValue + '') : Math.round(newValue)
}

function toFloat(value: unknown, decimal: 1 | 2 = 2, round: boolean = false): number {
  let newValue = cast.num(value)

  if (round) {
    return +(+newValue).toFixed(decimal)
  }

  if (decimal > 2) decimal = 2
  if (decimal < 1) decimal = 1

  let strValue = newValue + ''
  let index = strValue.indexOf('.')
  if (index > -1) {
    strValue = strValue.substring(0, decimal + index + 1)
  } else {
    strValue += (decimal === 2 ? '.00' : '.0')
  }

  return +strValue
}

function toCnCent(value: unknown, round: boolean = false, reverse: boolean = false, decimal: 0 | 1 | 2 = 2): number | string {
  let newValue

  if (!reverse) {
    newValue = +toFloat(value, 2, round) || 0

    return parseInt(accMul(newValue, 100) + '') || 0
  }

  newValue = toInteger(value)

  const yuan = newValue / 100

  return !decimal ? yuan : yuan.toFixed(decimal)
}

function toBoolean(value: unknown): boolean {
  return cast.bool(value)
}

function toArray(value: unknown): any[] {
  return cast.arr(value)
}

function toSymbol(value: unknown): Symbol {
  return cast.symbol(value)
}

function toUndefined(value?: unknown): undefined {
  return cast.undef()
}

function toNull(value?: unknown): null {
  return cast.nul()
}

function toCnLetter(value: unknown): string[] {
  let newValue = cast.str(value)

  return makePy(newValue) || []
}

function toOriginal(value: unknown): any {
  return cast.unwrap(value)
}

function toTitle(value: string): string {
  if (!value) return ''

  const val = cast.str(value).toLocaleLowerCase()

  if (!val.length) return ''

  return `${val[0].toLocaleUpperCase()}${val.slice(1)}`
}

function toPercentage(value: unknown, decimal: number = 0, keepSuffix: boolean = true): string {
  const newValue = +cast.num(value)
  decimal = Math.abs(cast.num(decimal))

  return `${(accMul(newValue, 100)).toFixed(decimal)}${keepSuffix ? '%' : ''}`
}

function toThousands(value: unknown): string {
  let newValue = +cast.num(value)
  let isNegative = false

  if (!newValue) return '0'

  if (newValue < 0) {
    newValue = Math.abs(newValue)
    isNegative = true
  }

  // 兼容小数
  const newValueStr = newValue.toString()
  const values = newValueStr.split('.')
  const integerPart = values[0]
  const decimalPart = newValueStr.slice(integerPart.length)

  let result = ''
  let counter = 0
  let i = integerPart.length - 1

  for (; i >= 0; i--) {
    counter++
    result = `${integerPart.charAt(i)}${result}`

    if (!(counter % 3) && i !== 0) {
      result = `,${result}`
    }
  }

  return `${!isNegative ? '' : '-'}${result}${decimalPart}`
}

function genUuid(): string {
  const s = []
  const hexDigits = '0123456789abcdef'

  for (let i = 0; i < 36; i++) {
    let start = Math.floor(Math.random() * 0x10)
    s[i] = hexDigits.substring(start, start + 1)
  }

  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  let start = (+s[19] & 0x3) | 0x8
  s[19] = hexDigits.substring(start, start + 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')

  return uuid
}

function genRandomInteger(start?: number, end?: number): number {
  start = (start && +start) ? +start : 0
  end = (end && +end) ? +end : 10

  if (end < start) {
    [start, end] = [end, start]
  }

  return Math.floor(Math.random() * (end - start)) + Math.min(start, end)
}

function cloneDeep(value: any): any {
  return check.exception(() => JSON.parse(JSON.stringify(value)))
}

function parseDataset(e: any, key?: string | number): any {
  return check.exception(() => {
    if (e?.currentTarget?.dataset) {
      const dataset = e.currentTarget.dataset

      if (check.undef(key) || check.nul(key)) return dataset

      return dataset[key as string | number] ?? undefined
    }

    return null
  })
}

function apiPromisify(fn: any) {
  return check.exception(() => function (obj: any) {
    let args: any[] = [],
      len = arguments.length - 1

    while (len-- > 0) {
      args[len] = arguments[len + 1]
    }

    if (obj === undefined) obj = {}

    return new Promise((resolve, reject) => {
      obj.success = (res: any) => {
        resolve(res)
      }
      obj.fail = (err: any) => {
        reject(err)
      }

      fn.apply(null, [obj].concat(args))
    })
  })
}

function getImageInfo(path: string) {
  return check.exception(() => apiPromisify(wx.getImageInfo)({ src: path }))
}

function triggerEvent(handler: string, config?: {
  // 传递给页面栈事件的值
  detail?: any
  // 排除的页面栈索引值
  exclude?: number[]
}) {
  return check.exception(async() => {
    const exclude = config?.exclude ?? []
    const pages = getCurrentPages()
    const excludeIndex = exclude.map(idx => (idx >= 0 ? idx : (pages.length + idx)))
    let index = pages.length - 1

    for (index; index >= 0; index--) {
      if (excludeIndex.includes(index)) continue

      const page = pages[index]
      let fnName = ''

      if (check.str(handler)) {
        fnName = handler as string
        page[fnName] && check.fun(page[fnName]) && (config?.detail ? page[fnName](config.detail) : page[fnName]())
      }
    }
  })
}

const util = {
  /**
   * 检查 value 是否为字符串
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为字符串，那么返回 true，否则返回 false
   */
  isString,
  /**
   * 检查 value 是否为数值
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为数值，那么返回 true，否则返回 false
   */
  isNumber,
  /**
   * 检查 value 是否为整数
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为整数，那么返回 true，否则返回 false
   */
  isInteger,
  /**
   * 检查 value 是否为正整数
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为正整数，那么返回 true，否则返回 false
   */
  isPositiveInteger,
  /**
   * 检查 value 是否为浮点数
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为浮点数，那么返回 true，否则返回 false
   */
  isFloat,
  /**
   * 检查 value 是否为正浮点数
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为正浮点数，那么返回 true，否则返回 false
   */
  isPositiveFloat,
  /**
   * 检查 value 是否为布尔值
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为布尔值，那么返回 true，否则返回 false
   */
  isBoolean,
  /**
   * 检查 value 是否为数组
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为数组，那么返回 true，否则返回 false
   */
  isArray,
  /**
   * 检查 value 是否为类数组
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为类数组，那么返回 true，否则返回 false
   */
  isArrayLike,
  /**
   * 检查 value 是否为对象类型
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为对象类型，那么返回 true，否则返回 false
   */
  isObject,
  /**
   * 检查 value 是否为普通对象
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为普通对象，那么返回 true，否则返回 false
   */
  isPlainObject,
  /**
   * 检查 value 是否为类对象
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为类对象，那么返回 true，否则返回 false
   */
  isObjectLike,
  /**
   * 检查 value 是否为 symbol
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 symbol，那么返回 true，否则返回 false
   */
  isSymbol,
  /**
   * 检查 value 是否为函数
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 函数，那么返回 true，否则返回 false
   */
  isFunction,
  /**
   * 检查 value 是否为 NaN
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 NaN，那么返回 true，否则返回 false
   */
  isNaN,
  /**
   * 检查 value 是否为 undefined
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 undefined，那么返回 true，否则返回 false
   */
  isUndefined,
  /**
   * 检查 value 是否为 null
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 null，那么返回 true，否则返回 false
   */
  isNull,
  /**
   * 检查 value 是否为 error 类型
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 error，那么返回 true，否则返回 false
   */
  isError,
  /**
   * 检查 value 是否为闰年
   *
   * @param {number} value 要检查的值
   *
   * @returns {boolean} 如果 value 为闰年，那么返回 true，否则返回 false
   */
  isLeapYear,
  /**
   * 检查 value 是否为邮箱
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为邮箱，那么返回 true，否则返回 false
   */
  isEmail,
  /**
   * 检查 value 是否为 url
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为 url，那么返回 true，否则返回 false
   */
  isUrl,
  /**
   * 检查 value 是否为国内手机号码
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为国内手机号码，那么返回 true，否则返回 false
   */
  isCnPhoneNumber,
  /**
   * 检查 value 是否为国内身份证号码
   *
   * @param {unknown} value 要检查的值
   *
   * @returns {boolean} 如果 value 为国内身份证号码，那么返回 true，否则返回 false
   */
  isCnIdCard,
  /**
   * 检查 value 是否为假值
   *
   * @param {any} value 要检查的值
   *
   * @returns {boolean} 如果 value 为假值，那么返回 true，否则返回 false
   */
  isFalsy,
  /**
   * 检查两个值是否相等
   *
   * @param {any} value1 要检查的值
   * @param {any} value2 要检查的值
   * @param {boolean} strict 是否严格相等，默认为 true
   *
   * @returns {boolean} 如果两个值相等，那么返回 true，否则返回 false
   */
  isEqual,
  /**
   * 将 value 转换为字符串
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {string} 转换后的值
   *
   * @example
   *
   * toString(1) // '1'
   * toString([1, 2, 3]) // '1,2,3'
   */
  toString,
  /**
   * 将 value 转换为数值
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {number} 转换后的值
   *
   * @example
   *
   * toNumber('1') // 1
   * toNumber('a') // 0
   * toNumber('true') // 1
   * toNumber(false) // 0
   * toNumber([1]) // 0
   */
  toNumber,
  /**
   * 将 value 转换为整数
   *
   * @param {unknown} value 要转换的值
   * @param {boolean} round 是否使用 Math.round? 默认为 false
   *
   * @returns {number} 转换后的值
   *
   * @example
   *
   * toInteger(1.5) // 1
   * toInteger(1.5, true) // 2
   */
  toInteger,
  /**
   * 将 value 转换为浮点数
   *
   * @param {unknown} value 要转换的值
   * @param {number} decimal 保留小数点后 1 位或 2 位, 默认为 2
   * @param {boolean} round 是否使用 Math.round? 默认为 false
   *
   * @returns {number} 转换后的值
   *
   * @example
   *
   * toFloat(1.567) // 1.56
   * toFloat(1.567, 1) // 1.5
   * toFloat(1.567, 2) // 1.56
   * toFloat(1.567, 2, true) // 1.57
   */
  toFloat,
  /**
   * 将人民币元转换为分
   *
   * 在开发时，一般将金额字段的单位转换为分后存入数据库
   *
   * @param {unknown} value 要转换的值
   * @param {boolean} round 是否使用 Math.round? 默认为 false
   * @param {boolean} reverse 是否将分转到元，默认为 false
   * @param {number} decimal reverse 为 true 时，保留小数点后 1 位或 2 位, 默认为 2
   *
   * @returns {number|string} 转换后的值
   *
   * @example
   *
   * toCnCent(1.567) // 156
   * toCnCent(1.567, true) // 157
   * toCnCent(156, false, true) // '1.56'
   * toCnCent(156, false, true, 2) // '1.56'
   * toCnCent(156, false, true, 1) // '1.6'
   * toCnCent(156, false, true, 0) // 1.56
   */
  toCnCent,
  /**
   * 将 value 转换为布尔值
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {boolean} 转换后的值
   *
   * @example
   *
   * toBoolean('1') // true
   */
  toBoolean,
  /**
   * 将 value 转换为数组
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {any[]} 转换后的值
   *
   * @example
   *
   * toArray(0) // [0]
   * toArray('1, 2, 3') // ['1', ' 2', ' 3']
   *
   */
  toArray,
  /**
   * 将 value 转换为 symbol
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {Symbol} 转换后的值
   *
   * @example
   *
   * toSymbol(0) //Symbol(0)
   */
  toSymbol,
  /**
   * 将 value 转换为 undefined
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {undefined} 转换后的值
   */
  toUndefined,
  /**
   * 将 value 转换为 null
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {null} 转换后的值
   */
  toNull,
  /**
   * 将 value 转换为拼音首字母
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {string[]} 转换后的值
   *
   * @example
   *
   * toCnLetter('你好') // ['NH']
   */
  toCnLetter,
  /**
   * 将 value 转换为原始值
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {string[]} 转换后的值
   *
   * @example
   *
   * toOriginal('1') // 1
   * toOriginal('true') // true
   * toOriginal('null') // null
   * toOriginal('[{ "id": 1, "age": 12 }]') // [{ "id": 1, "age": 12 }]
   */
  toOriginal,
  /**
   * 将 value 转换为 title
   *
   * @param {string} value 要转换的值
   *
   * @returns {string} 转换后的值
   *
   * @example
   *
   * toTitle('welcome') // 'Welcome'
   */
  toTitle,
  /**
   * 将 value 转换为百分比
   *
   * @param {unknown} value 要转换的值
   * @param {number} decimal 保留小数位数, 默认为 0
   * @param {boolean} keepSuffix 在最后加 % 符号, 默认为 false
   *
   * @returns {string} 转换后的值
   *
   * @example
   *
   * toPercentage(0.1) // 10%
   * toPercentage(0.1, 1) // 10.0%
   * toPercentage(-0.1) // -10%
   * toPercentage('0.01', 3) // 1.000%
   * toPercentage(0, 0, false) // 0
   */
  toPercentage,
  /**
   * 将 value 进行千分位格式化
   *
   * @param {unknown} value 要转换的值
   *
   * @returns {string} 转换后的值
   *
   * @example
   *
   * toThousands(1234567) // 1,234,567
   * toThousands(12345.67) // 12,345.67
   * toThousands(-12.34567) // -12.34567
   * toThousands(-123456.7) // -123,456.7
   * toThousands(0) // 0
   */
  toThousands,
  /**
   * 生成 UUID
   *
   * @returns {string} 返回 UUID
   *
   * @example
   *
   * genUuid() // '3e3e6bbb-ecb7-4289-8a05-a64647d82604'
   */
  genUuid,
  /**
   * 生成一个随机数
   *
   * @param {number|undefined} start 随机数最小值
   * @param {number|undefined} end 随机数最大值（不包含该值）
   *
   * @returns {number} 随机数
   *
   * @exapmle
   *
   * genRandomInteger() // 3
   *
   * genRandomInteger(10, 100) // 12
   */
  genRandomInteger,
  /**
   * 深拷贝
   *
   * @param {any} value 需要深拷贝的值
   *
   * @returns {any}
   */
  cloneDeep,
  /**
   * 解析发生点击时函数传递的 event 参数
   *
   * @param {Object} e event 参数
   *
   * @returns {any} e.currentTarget.dataset
   */
  parseDataset,
  /**
   * 以 Promise 风格调用微信小程序接口
   *
   * @param {Function} fn 小程序接口
   *
   * @returns {Function} Promisify API
   */
  apiPromisify,
  /**
   * 获取图片信息
   *
   * @returns {Object} 图片信息 { width: number, height: number, path: string, orientation: stirng, type: string }
   */
  getImageInfo,
  /**
   * 执行当前页面栈的指定事件
   *
   * @param {String|Function} handler 需要执行的函数名
   * @param {Object} config 配置参数
   */
  triggerEvent
}

export default util