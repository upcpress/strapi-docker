/**
 * yd-user controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::yd-user.yd-user', ({ strapi }) => ({
  async getVerifyCode(ctx) {
    try {
      const {
        email,
      } = ctx.request.body

      if (!email) {
        return ctx.badRequest('email is required')
      }

      const existingUser = await strapi.entityService.findOne('api::yd-user.yd-user', email)

      if (existingUser) {
        return ctx.badRequest('user already exists')
      }

      const code = Math.floor(100000 + Math.random() * 900000)

      await strapi.plugin('email').service('email').send({
        to: '278224510@qq.com',
        from: 'yd@uppbook.com.cn',
        subject: '中国石油大学出版社-云读平台 邮箱注册验证码',
        text: `您的验证码是${code}，请在5分钟内输入。`,
        html: `<p>您的验证码是 <b>${code}</b>，请在5分钟内输入。</p>`,
      })

      ctx.send({
        code,
      })
    } catch (error) {
      console.error(error)
      ctx.badRequest(null, error)
    }
  },
}));
