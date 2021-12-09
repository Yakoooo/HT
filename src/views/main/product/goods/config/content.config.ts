export const contentConfig = {
  TableConfig: [
    { prop: 'name', label: '商品名', minWidth: '100' },
    { prop: 'oldPrice', label: '原价格', minWidth: '100' },
    { prop: 'newPrice', label: '现价格', minWidth: '100' },
    {
      prop: 'imageUrl',
      label: '商品图片',
      minWidth: '100',
      soltName: 'imageUrl'
    },
    { prop: 'status', label: '状态', minWidth: '100', soltName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      soltName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      soltName: 'updateAt'
    },
    {
      prop: 'btn',
      label: '操作',
      minWidth: '250',
      soltName: 'btn'
    }
  ],
  tilte: '角色管理'
}
