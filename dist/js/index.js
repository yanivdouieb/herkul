const new_room = document.getElementById('new_room');
const connexion_room = document.getElementById('connexion_room');

new_room.addEventListener('click', () => {
    window.location.href = "./room/new/";
})
connexion_room.addEventListener('click', () => {
    window.location.href = "./room/connect/";
})