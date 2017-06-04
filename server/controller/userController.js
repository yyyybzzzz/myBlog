var token = require('../utils/Token')
module.exports.init = function (router) {
    router.post('/login', login);
}
function login(req, res, next) {
    var user = req.body
    var result = ''
    if (user.uname == 'zyb' && user.password == '13525601182') {
        result = {
            code: 0,
            msg: '',
            data: {
                token: token.addUser(user)
            }
        }
    } else {
        result = {
            code: 1,
            msg: '用户名或密码错误',
            data: ''
        }
    }
    res.end(JSON.stringify(result))
}