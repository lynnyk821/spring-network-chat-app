/*main.js*/

import Client from "./stompClient.js";
import { changePage } from "./changePage.js";

const usernameElement = document.getElementById('username');
const usernameButtonElement = document.getElementById('usernameButton');

let client;


usernameButtonElement.addEventListener('click', ()=> {
    const username = usernameElement.value.trim();
    if(username){
        changePage(username);
        client = new Client(username);
        client.connect();
    }
});

const messageElement = document.getElementById('message');

messageElement.addEventListener('keydown', (event) => {
    const username = usernameElement.value.trim();
    if (event.key === 'Enter') {
        const message = messageElement.value.trim();
        if (message) {
            if (client.stompClient && client.stompClient.connected) {
                client.sendMessage(message);
                messageElement.value = '';
            }
        }
    }
})