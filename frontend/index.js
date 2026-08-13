//alert("Welcome to bootcamp")
var user=[
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "jane.png"
    }
];

var curId = 0;
function toggleUser(){
    // alert("Came here");
    curId = (curId + 1) % user.length;
    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");


    userName.innerHTML = user[curId].name;
    userGender.innerHTML = user[curId].gender;
    userImage.src = user[curId].image;

}
