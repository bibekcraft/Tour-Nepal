const sessionIdToUserMap=new map()

function setUser(id,user){
    sessionIdToUserMap.set(id,user)
}
function getUSer(id){
    sessionIdToUserMap.get(id)
}
module.exports={
    setUser,
    getUSer,
};