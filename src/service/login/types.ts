export interface IAccount {
  name: string
  pwd: string
}

export interface DataType {
  id: number
  name: string
  token: string
}

export interface RootDataType {
  code: number
  data: DataType
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface Data {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}

export interface RootObject {
  code: number
  data: Data
}

export interface Child2 {
  id: number
  url?: any
  name: string
  sort?: any
  type: number
  parentId: number
  permission: string
}

export interface Child {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children: Child2[]
  parentId: number
}

export interface Datum {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Child[]
}

export interface menuRootObject {
  code: number
  data: Datum[]
}
