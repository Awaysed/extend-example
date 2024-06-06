import { defineComponent } from 'vue'
import { formatDataLayout, FormatDataType } from './filters'
export interface FormatData extends FormatDataType {
    setColor?: boolean /* 设置颜色 */
    needTitle?: boolean /* 是否需要标题 */
}

export default defineComponent({
    name: 'data-item',
    props: {
        formatData: {
            // 表格数据
            default: () => {},
            type: Object
        },
        val: {
            required: true
        }
    },
    render() {
        let { setColor = false, needTitle = false } = this.formatData
        let res = formatDataLayout(this.val, this.formatData) // 对数据进行格式化处理
        let _color = {}
        if (setColor) {
            let _num = parseFloat(res)
            _num = isNaN(_num) ? 0 : _num
            _color = _num ? (_num > 0 ? {color:'red'} : {color:'#999999'}) : ''
        } // 条件判断可以加
        return (
            <div style={_color} title={needTitle ? res : ''}>
                {res}
            </div>
        )
    }
})
