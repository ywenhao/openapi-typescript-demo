import axios from 'axios'
import type { CommonAPI, CommonReturn } from './_utils'

export type AdminModel = CommonReturn<'/account', 'get'>

export const getAdminList: CommonAPI<'/admin', 'get'> = (params) =>
  axios.get('/v1/admin/list', { params })
