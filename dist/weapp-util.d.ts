declare function isString(value: unknown): boolean;
declare function isNumber(value: unknown): boolean;
declare function isInteger(value: unknown): boolean;
declare function isPositiveInteger(value: unknown): boolean;
declare function isFloat(value: unknown): boolean;
declare function isPositiveFloat(value: unknown): boolean;
declare function isBoolean(value: unknown): boolean;
declare function isArray(value: unknown): boolean;
declare function isArrayLike(value: unknown): boolean;
declare function isObject(value: unknown): boolean;
declare function isPlainObject(value: unknown): boolean;
declare function isObjectLike(value: unknown): boolean;
declare function isSymbol(value: unknown): boolean;
declare function isFunction(value: unknown): boolean;
declare function isNaN(value: unknown): boolean;
declare function isUndefined(value: unknown): boolean;
declare function isNull(value: unknown): boolean;
declare function isError(value: unknown): boolean;
declare function isLeapYear(value: number): boolean;
declare function isEmail(value: unknown): boolean;
declare function isUrl(value: unknown): boolean;
declare function isCnPhoneNumber(value: unknown): boolean;
declare function isCnIdCard(value: unknown): boolean;
declare function isFalsy(value: any): boolean;
declare function isEqual(value1?: any, value2?: any, strict?: boolean): boolean;
declare function toString(value: unknown): string;
declare function toNumber(value: unknown): number;
declare function toInteger(value: unknown, round?: boolean): number;
declare function toFloat(value: unknown, decimal?: 1 | 2, round?: boolean): number;
declare function toCnCent(value: unknown, round?: boolean, reverse?: boolean, decimal?: 0 | 1 | 2): number | string;
declare function toBoolean(value: unknown): boolean;
declare function toArray(value: unknown): any[];
declare function toSymbol(value: unknown): Symbol;
declare function toUndefined(value?: unknown): undefined;
declare function toNull(value?: unknown): null;
declare function toCnLetter(value: unknown): string[];
declare function toOriginal(value: unknown): any;
declare function toTitle(value: string): string;
declare function toPercentage(value: unknown, decimal?: number, keepSuffix?: boolean): string;
declare function toThousands(value: unknown): string;
declare function genUuid(): string;
declare function genRandomInteger(start?: number, end?: number): number;
declare function cloneDeep(value: any): any;
declare function parseDataset(e: any, key?: string | number): any;
declare function apiPromisify(fn: any): any;
declare function getImageInfo(path: string): any;
declare function triggerEvent(handler: string, config?: {
    detail?: any;
    exclude?: number[];
}): any;
declare const util: {
    /**
     * 检查 value 是否为字符串
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为字符串，那么返回 true，否则返回 false
     */
    isString: typeof isString;
    /**
     * 检查 value 是否为数值
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为数值，那么返回 true，否则返回 false
     */
    isNumber: typeof isNumber;
    /**
     * 检查 value 是否为整数
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为整数，那么返回 true，否则返回 false
     */
    isInteger: typeof isInteger;
    /**
     * 检查 value 是否为正整数
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为正整数，那么返回 true，否则返回 false
     */
    isPositiveInteger: typeof isPositiveInteger;
    /**
     * 检查 value 是否为浮点数
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为浮点数，那么返回 true，否则返回 false
     */
    isFloat: typeof isFloat;
    /**
     * 检查 value 是否为正浮点数
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为正浮点数，那么返回 true，否则返回 false
     */
    isPositiveFloat: typeof isPositiveFloat;
    /**
     * 检查 value 是否为布尔值
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为布尔值，那么返回 true，否则返回 false
     */
    isBoolean: typeof isBoolean;
    /**
     * 检查 value 是否为数组
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为数组，那么返回 true，否则返回 false
     */
    isArray: typeof isArray;
    /**
     * 检查 value 是否为类数组
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为类数组，那么返回 true，否则返回 false
     */
    isArrayLike: typeof isArrayLike;
    /**
     * 检查 value 是否为对象类型
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为对象类型，那么返回 true，否则返回 false
     */
    isObject: typeof isObject;
    /**
     * 检查 value 是否为普通对象
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为普通对象，那么返回 true，否则返回 false
     */
    isPlainObject: typeof isPlainObject;
    /**
     * 检查 value 是否为类对象
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为类对象，那么返回 true，否则返回 false
     */
    isObjectLike: typeof isObjectLike;
    /**
     * 检查 value 是否为 symbol
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 symbol，那么返回 true，否则返回 false
     */
    isSymbol: typeof isSymbol;
    /**
     * 检查 value 是否为函数
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 函数，那么返回 true，否则返回 false
     */
    isFunction: typeof isFunction;
    /**
     * 检查 value 是否为 NaN
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 NaN，那么返回 true，否则返回 false
     */
    isNaN: typeof isNaN;
    /**
     * 检查 value 是否为 undefined
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 undefined，那么返回 true，否则返回 false
     */
    isUndefined: typeof isUndefined;
    /**
     * 检查 value 是否为 null
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 null，那么返回 true，否则返回 false
     */
    isNull: typeof isNull;
    /**
     * 检查 value 是否为 error 类型
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 error，那么返回 true，否则返回 false
     */
    isError: typeof isError;
    /**
     * 检查 value 是否为闰年
     *
     * @param {number} value 要检查的值
     *
     * @returns {boolean} 如果 value 为闰年，那么返回 true，否则返回 false
     */
    isLeapYear: typeof isLeapYear;
    /**
     * 检查 value 是否为邮箱
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为邮箱，那么返回 true，否则返回 false
     */
    isEmail: typeof isEmail;
    /**
     * 检查 value 是否为 url
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为 url，那么返回 true，否则返回 false
     */
    isUrl: typeof isUrl;
    /**
     * 检查 value 是否为国内手机号码
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为国内手机号码，那么返回 true，否则返回 false
     */
    isCnPhoneNumber: typeof isCnPhoneNumber;
    /**
     * 检查 value 是否为国内身份证号码
     *
     * @param {unknown} value 要检查的值
     *
     * @returns {boolean} 如果 value 为国内身份证号码，那么返回 true，否则返回 false
     */
    isCnIdCard: typeof isCnIdCard;
    /**
     * 检查 value 是否为假值
     *
     * @param {any} value 要检查的值
     *
     * @returns {boolean} 如果 value 为假值，那么返回 true，否则返回 false
     */
    isFalsy: typeof isFalsy;
    /**
     * 检查两个值是否相等
     *
     * @param {any} value1 要检查的值
     * @param {any} value2 要检查的值
     * @param {boolean} strict 是否严格相等，默认为 true
     *
     * @returns {boolean} 如果两个值相等，那么返回 true，否则返回 false
     */
    isEqual: typeof isEqual;
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
    toString: typeof toString;
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
    toNumber: typeof toNumber;
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
    toInteger: typeof toInteger;
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
    toFloat: typeof toFloat;
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
    toCnCent: typeof toCnCent;
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
    toBoolean: typeof toBoolean;
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
    toArray: typeof toArray;
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
    toSymbol: typeof toSymbol;
    /**
     * 将 value 转换为 undefined
     *
     * @param {unknown} value 要转换的值
     *
     * @returns {undefined} 转换后的值
     */
    toUndefined: typeof toUndefined;
    /**
     * 将 value 转换为 null
     *
     * @param {unknown} value 要转换的值
     *
     * @returns {null} 转换后的值
     */
    toNull: typeof toNull;
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
    toCnLetter: typeof toCnLetter;
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
    toOriginal: typeof toOriginal;
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
    toTitle: typeof toTitle;
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
    toPercentage: typeof toPercentage;
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
    toThousands: typeof toThousands;
    /**
     * 生成 UUID
     *
     * @returns {string} 返回 UUID
     *
     * @example
     *
     * genUuid() // '3e3e6bbb-ecb7-4289-8a05-a64647d82604'
     */
    genUuid: typeof genUuid;
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
    genRandomInteger: typeof genRandomInteger;
    /**
     * 深拷贝
     *
     * @param {any} value 需要深拷贝的值
     *
     * @returns {any}
     */
    cloneDeep: typeof cloneDeep;
    /**
     * 解析发生点击时函数传递的 event 参数
     *
     * @param {Object} e event 参数
     *
     * @returns {any} e.currentTarget.dataset
     */
    parseDataset: typeof parseDataset;
    /**
     * 以 Promise 风格调用微信小程序接口
     *
     * @param {Function} fn 小程序接口
     *
     * @returns {Function} Promisify API
     */
    apiPromisify: typeof apiPromisify;
    /**
     * 获取图片信息
     *
     * @returns {Object} 图片信息 { width: number, height: number, path: string, orientation: stirng, type: string }
     */
    getImageInfo: typeof getImageInfo;
    /**
     * 执行当前页面栈的指定事件
     *
     * @param {String|Function} handler 需要执行的函数名
     * @param {Object} config 配置参数
     */
    triggerEvent: typeof triggerEvent;
};
export default util;
