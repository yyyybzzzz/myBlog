var sql = {
    insert: 'insert into article(a_id,title,tag,type,content,time,visit) values(?,?,?,?,?,?,?)',
    update: 'update article set title=?,tag=?,content=?,type=? where a_id=?',
    delete: 'delete from article where a_id=?',
    queryByid: 'select * from article where a_id=?',
    queryAll: 'select * from article'
}
module.exports = sql