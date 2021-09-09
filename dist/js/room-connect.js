var cleave = new Cleave("#uuid_connection", {
  delimiter: "-",
  blocks: [3, 3],
  uppercase: true,
});

let uuid = document.getElementById("uuid_connection");
let uuid_pswd = document.getElementById("uuid_pswd");
uuid_pswd.addEventListener("keyup", function (event) {
  if (uuid.value.length === 7) {
    if (uuid_pswd.value.length > 3) {
      document.getElementById("login").className =
        "ease-in-out hover:shadow-md";
    } else {
      document.getElementById("login").className = "disabled";
    }
  } else {
    document.getElementById("login").className = "disabled";
  }
});

uuid.addEventListener("keyup", function(event) {
  if(uuid.value.length < 7){
      document.getElementById('login').className = "disabled"
  }else{
      if(uuid_pswd.value.length > 3){
          document.getElementById('login').className = "ease-in-out hover:shadow-md"
      }else{
          document.getElementById('login').className = "disabled"
      }
  }
})