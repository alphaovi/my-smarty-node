const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world, we are researching about node");
});

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",

    },
    
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",

    },
    
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    }
];
app.get("/users", (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(match)
    }
    else{
        res.send(users)
    }
});

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
});

app.post("/user", (req, res) => {
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Hi guys, we finally know about something about node ${port}`);
})