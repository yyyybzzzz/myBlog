var uuid =require('node-uuid')

module.exports={
    getUUID:function () {
        return uuid.v4().replace(new RegExp('-',"gm"),'')
    },
    getTime:function () {
        return Date.now()+''
    }

}