const express = require("express");
const users = require("./project/MOCK_DATA.json");
const app = express();
const PORT = 8001;

// Return full users' JSON data
app.get('/users', (req, res) => {
    return res.json(users);
});

// Return user by id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);  // Ensure id is treated as an integer
    const user = users.find((user) => user.id === id);
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
});
app.post('api/users',(req,res)=>{
    ///to create new user
    return res.json({status:"pending"});
})
app.patch('api/users/:id',(req,res)=>{
    ///to edit new user
    return res.json({status:"pending"});
})

app.post('api/users/:id',(req,res)=>{
    ///to delete new user   
    return res.json ({status:"deleted"});
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
