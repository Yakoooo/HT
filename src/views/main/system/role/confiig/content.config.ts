export const contentConfig = {
  TableConfig: [
    { prop: 'name', label: '超级管理员', minWidth: '100' },
    { prop: 'intro', label: '权限', minWidth: '100' },
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
