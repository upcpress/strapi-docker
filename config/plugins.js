module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.qiye.aliyun.com'),
        port: env('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('yd@uppbook.com.cn'),
          pass: env('WX2-ZT@cBjm3neMR'),
        },
      },
      settings: {
        defaultFrom: 'yd@uppbook.com.cn',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },
})
