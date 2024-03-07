import {addClassAttribute } from "./helpers.js";

class Client {
    constructor(username) {
        this.username = username;
    }
    connect = () => {
        if(username){
            const socket = new SockJS('/ws');
            const stompClient = Stomp.over(socket);

            stompClient.connect({}, () => {
                stompClient.subscribe('/topic/public', onMessageReceived);
                stompClient.send("/app/chat.addUser", {},
                    JSON.stringify({sender: this.username, type: 'JOIN'})
                );
            });
        }
    }
}
function join(messageElement, message) {
    message.content = message.sender + ' joined!';
    addClassAttribute(messageElement, 'event-message');
}

function leave(messageElement, message) {
    message.content = message.sender + ' left!';
    addClassAttribute(messageElement, 'event-message');
}

function chat(messageElement, message) {
    const usernameElement = document.createElement('span');
    const usernameText = document.createTextNode(message.sender);

    usernameElement.appendChild(usernameText);
    messageElement.appendChild(usernameElement);

    addClassAttribute(messageElement, 'chat-message');
}


export default Client;