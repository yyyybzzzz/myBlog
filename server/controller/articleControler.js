var articleDao = require('../dao/articleDao')
var util = require('../utils/util')

module.exports.init = function (router) {
    router.post('/addArticle', addArticle);
}

function addArticle(req, res, next) {
    console.log(util.getUUID())
    var article = {
        a_id:util.getUUID(),
        title:req.body.title,
        type:0,
        tag:'code',
        content:' ',
        time:util.getTime(),
        visit:0

    }
    articleDao.addArticle(article)
    console.log(article)
    var r = {'zyb': '123'}
    res.end(JSON.stringify(r))
}