var articleDao = require('../dao/articleDao')
var util = require('../utils/util')

module.exports.init = function (router) {
    router.post('/addArticle', addArticle);
    router.get('/getArticles', getArticles)
    router.post('/publishArticle', publishArticle);
    router.post('/deleteArticle', deleteArticle);
}

function addArticle(req, res, next) {
    var article = {
        'a_id': util.getUUID(),
        'title': req.body.title,
        'type': 0,
        'tag': 'code',
        'content': ' ',
        'time': util.getTime(),
        'visit': 0

    }
    articleDao.addArticle(article)
    var result = {
        code: 0,
        data: article,
        msg: ''
    }

    res.end(JSON.stringify(result))
}
function getArticles(req, res, next) {
    articleDao.getArticles(function (data) {
        //console.log(data)
        var result = {
            code: 0,
            msg: '',
            data: data
        }
        res.end(JSON.stringify(result))
    })
}

function publishArticle(req, res, next) {
    articleDao.updateArticle(req.body, function (data) {
        var result = {
            code: 0,
            data: '',
            msg: ''
        }
        res.end(JSON.stringify(result))
    })
}

function deleteArticle(req, res, next) {
    articleDao.deleteArticle(req.body.id, function (data) {
        var result = {
            code: 0,
            data: '',
            msg: ''
        }
        res.end(JSON.stringify(result))
    })
}