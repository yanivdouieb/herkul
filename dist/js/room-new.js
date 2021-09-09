let room_name = document.getElementById('room_name')
let room_password = document.getElementById('room_password')

room_password.addEventListener("keyup", function(event) {
    if(room_name.value.length > 0){
        if(room_password.value.length > 3){
            document.getElementById('new_room').className = "ease-in-out hover:shadow-md"
        }else{
            document.getElementById('new_room').className = "disabled"
        }
    }else{
        document.getElementById('new_room').className = "disabled"
    }
})
room_name.addEventListener("keyup", function(event) {
    if(room_name.value.length === 0){
        console.log(true)
        document.getElementById('new_room').className = "disabled"
    }else{
        if(room_password.value.length > 3){
            document.getElementById('new_room').className = "ease-in-out hover:shadow-md"
        }else{
            document.getElementById('new_room').className = "disabled"
        }
    }
})

document.getElementById('new_room').addEventListener('click', ()=>{
    if(document.getElementById('new_room').className === "disabled"){
        
    }else{
        fetch('/api/room/new/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'room_name': room_name.value,
                'room_password': room_password.value
            }
        }).then(res => {return res.json()})
        .then(data => {
            window.location.href = `/web/${data.uuid_api}?first=true`
        })
    }
})