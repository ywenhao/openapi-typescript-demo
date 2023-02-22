import axios from 'axios'
import type { CommonAPI, CommonReturnListItem } from './_utils'

export type AdminModel = CommonReturnListItem<'/admin', 'get'>

export const getAdminList: CommonAPI<'/admin', 'get'> = (params) =>
  axios.get('/v1/admin/list', { params })
