const express=requre("express")
const {handleUserSignUp,handleUserLogin}=require('./handleUser')
const router=express.router();
router.post('/',handleUserSignUp)
router.post('/login',handleUserLogin)

model.exports=router;