import Client from "./client.js";
import { getElementById } from "./helpers.js";

const usernamePageElement = getElementById('usernamePage');
const usernameElement = getElementById('username');
const usernameButtonElement = getElementById('usernameButton');

const chatPageElement = getElementById('chatPage');
const messageElement = getElementById('message');

let client= null;

usernameButtonElement.addEventListener('click', ()=> {
    const username = usernameElement.value.trim();
    if(username){
        client = new Client(username);
        client.connect();
        usernamePageElement.classList.add('hidden');
        chatPageElement.classList.remove('hidden');
    }
});

messageElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const message = messageElement.value.trim();
        if(message){
            client.sendMessage(message);
            messageElement.value = '';
        }
    }
})