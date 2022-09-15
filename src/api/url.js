import { post } from './instance'

export const getList = (data) => post({ url: '/blindDateWall/visitingCard/list', data })
export const getCitys = (data) => post({ url: '/common/country', data })