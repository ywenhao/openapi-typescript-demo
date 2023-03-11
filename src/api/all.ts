import axios from 'axios'
import type { paths } from '../../schema/all'
import type { CommonAPI, CommonReturnListItem } from './_utils'

export type AdminModel = CommonReturnListItem<paths, '/v1/admin', 'get'>

export const getAdminList: CommonAPI<paths, '/v1/admin', 'get'> = () =>
  axios.get('/v1/admin/list')
