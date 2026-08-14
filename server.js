const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("frontend"));
app.listen(port, function(){
    console.log("Server running on http://localhost:" +port);
});
const users=[
    {
        "id": 1,
        "name":"john",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id": 2,
        "name":"amber",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id": 3,
        "name":"lily",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id": 4,
        "name":"juan",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id": 5,
        "name":"valtteri rantala",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg",
    },

]