var cleave = new Cleave("#uuid_connection", {
  delimiter: "-",
  blocks: [3, 3],
  uppercase: true,
});

let uuid = document.getElementById("uuid_connection");
uuid.addEventListener("keyup", function (event) {
    if(uuid.value.length === 7){
        document.getElementById("login").className = "ease-in-out hover:shadow-md "
    }else{
        document.getElementById("login").className = "disabled"
    }
})