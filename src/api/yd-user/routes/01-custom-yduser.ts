export default {
  routes: [
    {
      method: 'POST',
      path: '/yd-user/getcode',
      handler: 'yd-user.getVerifyCode',
    },
  ]
}