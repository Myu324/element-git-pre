import request, { post, get } from '@/utils/request'

/* export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
} */

/**
 * 登录
 * @param {*} data
 * @returns
 */
export function loginAPI(data) {
  return post('/api/v1/auth/manager_login', data)
}
/**
 * 获取用户信息
 * @returns
 */
export function getInfoAPI() {
  return get('/api/v1/auth/manager_info')
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
