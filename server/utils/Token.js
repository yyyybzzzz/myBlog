var jwt = require('jwt-simple')
var express = require('express');

var app = express()
app.set('jwtTokenSecret', 'zyb155393')
app.set('tokenList', [])
function encode(u) {
    return jwt.encode(u.uname, app.get('jwtTokenSecret'))
}
function decode(t) {

}

module.exports = {
    addUser: function (u) {
        var token = encode(u)
        app.get('tokenList').push(token)
        return token
    },
    getUser: function (t) {
        var list = app.get('tokenList')
        for (var i in list) {
            if (list[i] == t) {
                return jwt.decode(token, app.get('jwtTokenSecret'));
            }
        }
        return null
    }
}