import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const isAuthenticated = () => !!cookies.get('token')

export const getToken = () => cookies.get('token')

export const setToken = token => cookies.set('token', JSON.stringify(token), { path: '/' })

export const removeToken = () => {
  cookies.remove('token', { path: '/' })
}
