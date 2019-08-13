const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF

// 开发环境的数据库配置
if (env === 'dev') {
  MYSQL_CONF = {
    host: '', // 数据库地址
    user: '', // 数据库账号
    password: '', // 数据库密码
    database: '' // 连接哪个数据库
  }
}

// 线上环境的数据库配置
if (env === 'production') {
  MYSQL_CONF = {
    host: '', // 线上服务器地址
    user: '', // 线上服务器账号
    password: '', // 线上服务器密码
    database: '' // 连接哪个线上服务器数据库
  }
}

module.exports = {
  MYSQL_CONF
}
