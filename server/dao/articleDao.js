var mysql = require('mysql')
var db = require('../conf/db')
var $sql = require('./articleSqlMapping')


module.exports = {
    addArticle: function (article) {
        var connection = mysql.createConnection(db.mysql);
        var values = [article.a_id, article.title, article.tag, article.type, article.content, article.time, 0]
        connection.query($sql.insert, values, function (err, result) {
            if (err) throw err
        })
        connection.end()
    },
    getArticle: function () {
        var connection = mysql.createConnection(db.mysql);
        connection.query($sql.query, function (err, result) {
            if (err) throw err
            console.log(result)
        })
        connection.end()
    },
    getArticles: function (success) {
        var connection = mysql.createConnection(db.mysql);
        connection.query($sql.queryAll, function (err, result) {
            if (err) throw err
            else
                success(result)
            connection.end()
        })

    },
    updateArticle: function (article,success) {
        var connection = mysql.createConnection(db.mysql);
        var values = [article.title, article.tag,  article.content,article.type,  article.a_id]
        connection.query($sql.update, values, function (err, result) {
            if (err) throw err
            success(result)
        })
        connection.end()
    }
}