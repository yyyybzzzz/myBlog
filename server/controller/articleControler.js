var articleDao = require('../dao/articleDao')
var util = require('../utils/util')

module.exports.init = function (router) {
    router.post('/addArticle', addArticle);
    router.get('/getArticles',getArticles)
    router.post('/publishArticle', publishArticle);
}

function addArticle(req, res, next) {
    var article = {
        'a_id':util.getUUID(),
        'title':req.body.title,
        'type':0,
        'tag':'code',
        'content':' ',
        'time':util.getTime(),
        'visit':0

    }
    articleDao.addArticle(article)
    var result={
        code:0,
        data:article,
        msg:''
    }

    res.end(JSON.stringify(result))
}
function getArticles(req,res,next) {
    articleDao.getArticles(function (data) {
        //console.log(data)
        var result={
            code:0,
            msg:'',
            data:data
        }
        res.end(JSON.stringify(result))
    })
}

function publishArticle(req,res,next) {
    console.log(req.body)
    articleDao.updateArticle(req.body,function (data) {
        console.log(data)
        res.end('123')
    })
}