import { getElementById } from "./helpers.js";
import { changePage, addMessage } from "./chatPage.js";
import { connect } from "./stompClient.js";

const usernameElement = getElementById('username');
const usernameButtonElement = getElementById('usernameButton');

usernameButtonElement.addEventListener('click', () =>{
    const username = usernameElement.value.trim();
    changePage(username);
    connect(username);
});

const messageElement = getElementById('message');
const messageArrayElement = getElementById('messageArray');

messageElement.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addMessage(messageArrayElement, messageElement.value.trim());
    }
})



