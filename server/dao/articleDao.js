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
    getArticles: function () {
        var connection = mysql.createConnection(db.mysql);
        connection.query($sql.queryAll, function (err, result) {
            if (err) throw err
            connection.end()
            console.log(result)
        })

    },
    updateArticle: function (article) {
        var connection = mysql.createConnection(db.mysql);
        var values = [article.a_id, article.title, article.tag, article.type, article.content, article.time, 0]
        connection.query($sql.queryAll, values, function (err, result) {
            if (err) throw err
            console.log(result)
        })
        connection.end()
    }
}