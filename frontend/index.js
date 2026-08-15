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
function randomUser() {
    fetch("https://randomuser.me/api")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      var userName = document.getElementById("user-name");
      var userGender = document.getElementById("user-gender");
      var userImage = document.getElementById("user-image");

      var newUserName = data.results[0].name.first + " " + data.results[0].name.last;
      var newUserGender = data.results[0].gender;
      var newUserImage = data.results[0].picture.large;
      userName.innerHTML = newUserName;
      userGender.innerHTML = newUserGender;
      userImage.src = newUserImage;

    })
    .catch(function(err) {
      console.log("Error occured : " + err);
    })
}
function myRandomUser(){
    var userImage = document.getElementById("user-image");
    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");

    fetch("/api/users/random-user")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            userImage.src = data.image;
            userName.innerHTML = data.name;
            userGender.innerHTML = data.gender;
        })
        .catch(function(err){
            console.log("Error occured : " + err);
        })
}

