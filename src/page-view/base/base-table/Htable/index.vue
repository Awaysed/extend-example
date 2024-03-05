<template>
    <el-table :data="props.tableData" fit size="small" :border="true">
        <el-table-column v-for="item in computedTableConfig" :key="item.field" v-bind="item.tableProps">
            <template #default="scope">
                <slot :name="item.columnDynamicSlotName" :index="scope.$index" :data="scope.row[item.field]"
                    :rowData="scope.row" :config="scope.column">
                    <DataItem :val="scope.row[item.field]" :formatData="item.dataFormat"></DataItem>
                </slot>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
// import { TableConfigItem } from './type'
import DataItem from './common/data-item.tsx'
import { FormatData } from './common/data-item.tsx'

export interface TableConfigItem extends FormatData {
    show_name?: string
    field: string
    title?: string
    isFixed?: boolean
    width?: number
    minWidth?: number
    align?: 'left' | 'center' | 'right'
}

interface ElTableColumnPropsTypes {
    fixed?: boolean
    prop?: string
    label?: string
    width?: number
    minWidth?: number
    align?: 'left' | 'center' | 'right'
}

interface ComputedTableConfigItemTypes {
    field: string
    columnDynamicSlotName: string /*  对外暴露的插槽名称*/
    dataFormat: FormatData
    tableProps: ElTableColumnPropsTypes
}
const props = defineProps<{
    tableConfig: TableConfigItem[]
    tableData: any[]
}>()

let computedTableConfig = computed<ComputedTableConfigItemTypes[]>(() => {
    let res = []
    props.tableConfig.forEach((item) => {
        let _item: ComputedTableConfigItemTypes = {
            field: item.field,
            columnDynamicSlotName: 'column_' + item.field,
            dataFormat: {},
            tableProps: {}
        }
        for (const key in item) {
            if (key == 'field') {
                _item.tableProps.prop = item[key]
            }
            if (key == 'isFixed') {
                _item.tableProps.fixed = item[key]
            }
            if (key == 'title') {
                _item.tableProps.label = item[key]
            }
            if (['align', 'width', 'minWidth'].includes(key)) {
                _item.tableProps[key] = item[key]
            }
            if (['setColor', 'needTitle', 'format', 'suffix', 'prefix'].includes(key)) {
                _item.dataFormat[key] = item[key]
            }
        }
        res.push(_item)
    })
    return res
})
</script>
