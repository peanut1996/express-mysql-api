const { exec } = require('../db/mysql.js')
const { SuccessModel, ErrorModel } = require('../models/resModel.js')

// 测试 Express 服务是否有误（GET）| 没有问题，测试 数据库连接是否正常，取消 导入 service/index的注释 和 下面两个方法的注释
const test = (req, res, next) => {
  res.json(new SuccessModel({ msg: '测试：node服务器启动成功' }))
}

module.exports = {
  test
}
