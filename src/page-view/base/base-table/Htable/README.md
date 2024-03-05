

## props

| 参数              | 类型     |     可选值 | 默认值 |                                     说明 |
| :---------------- | :------- | ---------: | -----: | ---------------------------------------: |
| indexBase         | Number   |          — |      0 |         序号基准，用于翻页时需要修改序号 |
| isBorder          | Boolean  |          — |  false |                         表格是否需要边框 |
| bgDirection       | String   | column/row |      — |                             斑马背景方向 |
| maxDisplayRows    | Number   |          — |      — | 最多展示条数，超出出现滚动条，默认不限制 |
| filterCheckMethod | Function |          — |      — |            过滤是否选中,返回 true /false |
| tableData         | Array    |          — |      — |                                 表格数据 |
| tableConfig       | Array    |          — |      — |               表格配置数组，具体格式如下 |

### tableConfig 数据格式如下

```

[
  {
    title: "标题",
    field: "fund_name",//__index和__checkbox 保留field 用于序号和选择框
    align: "left",
    width: 200,
    needTitle: true,
    setColor: true,
    format: 1,
    cellClass: "", //String||(rowData)=>{return String}
    headerClass: "", //String||(rowData)=>{return String}
  },
  //...
]

```

### filterCheckMethod 函数接受的参数

依次接受如下四个参数

| 参数    | 类型    |                             说明 |
| :------ | :------ | -------------------------------: |
| flag    | Boolean |       当前操作是选中还是取消选中 |
| rowData | Object  |                         当行数据 |
| index   | Number  | 序号基准，用于翻页时需要修改序号 |

## 事件

| 参数            | 参数                                                         |                       说明 |
| :-------------- | :----------------------------------------------------------- | -------------------------: |    
| toggleCheckItem | 当前所有选中结果，当前操作状态，当前操作序号                 | 选中或者取消选中某个选择框 |
| clickTableRow   | {index,rowData} index:当前操作序号，rowData:当前操作行的数据 |             点击某一行处罚 |
