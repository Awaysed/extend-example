

export const FORMAT_RULE = {
    0: '原样输出',
    1: '小数点后两位-四舍五入',
    2: '小数点后两位-去尾法',
    3: '小数点后四位-四舍五入',
    4: '小数点后四位-去尾法',

    5: '万元-小数点后两位-四舍五入 基础值（待废弃）',
    6: '亿元-小数点后两位-四舍五入 基础值（待废弃）',
    7: '百分比-小数点后两位-四舍五入（待废弃）',
    8: '百分比-小数点后四位-四舍五入（待废弃）',
    9: '百分比-小数点后两位-去尾法（待废弃）',
    10: '百分比-小数点后两位-去尾法（待废弃）',

    11: "日期 按照 formatData.layout格式格式化 默认'YYYY-MM-DD'",
    111: "日期 按照 formatData.layout格式格式化 默认'YYYY-MM-DD HH:mm'",
    112: "日期 按照 formatData.layout格式格式化 默认'YYYY-MM-DD HH:mm:ss'",

    12: "数组格式 用formatData.separator 链接 默认`,'",
    13: '星星',
    21: '最新规模格式',
    22: '是否 0 显示 否 1 显示 是',

    120: '基础值*100 小数点后两位-四舍五入',
    121: "基础值*100 小数点后两位-四舍五入 + '%'后缀",
    220: '基础值*100 小数点后两位-去尾法',
    221: "基础值*100 小数点后两位-去尾法 + '%'后缀",
    320: '基础值*100 小数点后四位-四舍五入',
    321: "基础值*100 小数点后四位-四舍五入 + '%'后缀",
    420: '基础值*100 小数点后四位-去尾法',
    421: "基础值*100 小数点后四位-去尾法 + '%'后缀",

    130: '基础值/10000 小数点后两位-四舍五入',
    131: "基础值/10000 小数点后两位-四舍五入 + '万元'后缀",
    230: '基础值/10000 小数点后两位-去尾法',
    231: "基础值/10000 小数点后两位-去尾法 + '万元'后缀",
    330: '基础值/10000 小数点后四位-四舍五入',
    331: "基础值/10000 小数点后四位-四舍五入 + '万元'后缀",
    430: '基础值/10000 小数点后四位-去尾法',
    431: "基础值/10000 小数点后四位-去尾法 + '万元'后缀",

    140: '基础值/100000000 小数点后两位-四舍五入',
    141: "基础值/100000000 小数点后两位-四舍五入 + '亿元'后缀",
    240: '基础值/100000000 小数点后两位-去尾法',
    241: "基础值/100000000 小数点后两位-去尾法 + '亿元'后缀",
    340: '基础值/100000000 小数点后四位-四舍五入',
    341: "基础值/100000000 小数点后四位-四舍五入 + '亿元'后缀",
    440: '基础值/100000000 小数点后四位-去尾法',
    441: "基础值/100000000 小数点后四位-去尾法 + '亿元'后缀"
}

export interface FormatDataType {
    format?: number
    suffix?: string
    prefix?: string
}

export const formatDataLayout = function (val, formatData: FormatDataType, emptyStr = '--') {
    if (isEmpty(val)) return emptyStr /* 空值 */
    if (isEmpty(formatData.format) || !FORMAT_RULE[formatData.format])
        return val /* 没有format原样返回 */
    let { format, suffix, prefix } = formatData
    suffix = suffix || ''
    prefix = prefix || ''
    let _res = val,
        _temp /* 临时变量 */,
        _format /* formats */ = format,
        _formats /* formats */
    if (_format >= 120) {
        /* _format 大于100的时候是需要对传入val进行处理再进行格式转换 */
        _formats = (_format + '').split('').map((item) => parseInt(item))
        _format = _formats[0]
        let _tempSuffix = '' //;

        /* 
        对format的第二位进行处理 
          2:基础值*100，后缀 `%` ；
          3:基础值/10000 ，后缀 `万元` ；
          4:基础值/100000000 ，后缀 `亿元` 
        */
        switch (_formats[1]) {
            case 2: //
                _res = _res * 100
                _tempSuffix = '%'
                break
            case 3: //
                _res = _res / 10000
                _tempSuffix = '万元'
                break
            case 4: //
                _res = _res / 100000000
                _tempSuffix = '亿元'
                break
        }

        if (_formats[2] == 1) {
            // format最后一位是1 就加上相应的后缀，否则不添加后缀
            suffix = _tempSuffix + suffix
        }
    }

    switch (_format) {
        case 1: // 1:小数点后两位-四舍五入
            _temp = parseFloat(_res)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 2)
            break
        case 2: // 2:小数点后两位-去尾法
            _temp = parseFloat(_res)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 2, 'floor')
            break
        case 3: // 3:小数点后四位-四舍五入
            _temp = parseFloat(_res)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 4)
            break
        case 4: // 4:小数点后四位-去尾法
            _temp = parseFloat(_res)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 4, 'floor')
            break

        case 5: // 万元-小数点后两位-四舍五入
            _temp = parseFloat(_res)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 2) + '万元'
            break
        case 6: // 亿元-小数点后两位-四舍五入
            _temp = parseFloat(_res)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 2) + '亿元'
            break
        case 7: // 百分比-小数点后两位-四舍五入
            _temp = accMul(_res, 100)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 2) + '%'
            break
        case 8: // 百分比-小数点后四位-四舍五入
            _temp = parseFloat(_res) * 100
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 4) + '%'
            break
        case 9: // 百分比-小数点后两位-去尾法
            _temp = accMul(_res, 100)

            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 2, 'floor') + '%'
            break
        case 10: // 百分比-小数点后4位-去尾法
            _temp = accMul(_res, 100)
            _res = Number.isNaN(_temp) ? emptyStr : formatNumber(_temp, 4, 'floor') + '%'
            break
        case 21:
            _res = frmNumSuffix(_res, 2)
            break
        case 22:
            if (_res + '' === '0') {
                _res = '否'
            } else if (_res == 1) {
                _res = '是'
            } else {
                _res = ''
            }
            break
    }
    _res = _res + ''

    return _res && _res.length ? prefix + _res + suffix : emptyStr
}
export const isEmpty = function (val) {
    // null or undefined
    if (val == null) return true

    if (typeof val === 'boolean') return false
    if (typeof val === 'number') return val != 0 && !val

    if (val instanceof Error) return val.message === ''

    switch (Object.prototype.toString.call(val)) {
        // String or Array
        case '[object String]':
        case '[object Array]':
            return !val.length

        // Map or Set or File
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
            return !val.size
        }
        // Plain Object
        case '[object Object]': {
            return !Object.keys(val).length
        }
    }
    return false
}
export function formatNumber(number, decimals, roundtag, dec_point = '.', thousands_sep = ',') {
    /*
     * 参数说明：
     * number：要格式化的数字
     * decimals：保留几位小数
     * roundtag:舍入参数， "ceil" 向上取,"floor"向下取,默认"round" 四舍五入
     * dec_point：小数点符号
     * thousands_sep：千分位符号
     * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    roundtag = roundtag || 'round' //"ceil","floor","round"
    let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            const k = Math.pow(10, prec)
            return (
                '' +
                parseFloat(
                    Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)
                ) /
                    k
            )
        }
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    const re = /(-?\d+)(\d{3})/
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2')
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
}
// 乘法
export function accMul(arg1, arg2) {
    const s1 = arg1.toString()
    const s2 = arg2.toString()
    const s1Length = s1.length
    const s2Length = s2.length
    return (
        (s1 * Math.pow(10, s1Length) * (s2 * Math.pow(10, s2Length))) /
        Math.pow(10, s1Length + s2Length)
    )
}
export function frmNumSuffix(value, digit = 2) {
    if (!value && value != 0) return '--'
    const vlen = Math.abs(value).toString().split('.')[0].length
    if (vlen >= 5 && vlen < 9) {
        // 10000<=x<100,000,000
        return `${Number(value / 10000).toFixed(digit)}万`
    } else if (vlen >= 9) {
        return `${Number(value / 100000000).toFixed(2)}亿`
    } else {
        return parseInt(value)
    }
}