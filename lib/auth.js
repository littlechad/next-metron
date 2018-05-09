import Cookies from 'js-cookie'

export const isAuthenticated = () => (!!Cookies.get('token'))

export const getServerToken = (req) => {
  const { token = '' } = req.cookies

  return token
}

export const getToken = () => {
  let token = ''
  if (Cookies.get('token')) {
    token = Cookies.get('token')
  }
  return token
}

export const setToken = token => Cookies.set('token', token)

export const removeToken = () => Cookies.remove('token')
