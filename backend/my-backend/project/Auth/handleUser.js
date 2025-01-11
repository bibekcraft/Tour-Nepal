const { UUIDV4 } = require("sequelize");
const{setUser}=require('./sessionId')

async function handleUserSignUp(req,res) {
    const{name,email,password,phonenumber}=req.body;
    await User.create({
        name,
        email,
        password,
        phonenumber,
    })
        return res.render('home')
}
async function handleUserLogin(req,res) {
    const{email,password}=req.body;
    const user=await user.findOne({email,password})
    if(!user) 
        return res.render("login",{
    error:"invalid email or password"})
    const sessionId=UUIDV4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId)
    return res.redirect('/')

    
}
module.exports={
    handleUserSignUp 
}
module.exports={
    handleUserLogin
}