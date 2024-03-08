import Avatar from "./avatar.js";
import { handleLeave, handleJoin, handleChat } from "./clientHandler.js";

class Client {
    constructor(username) {
        this.username = username;
        this.stompClient = Stomp.over(new SockJS('ws'));
    }
    connect() {
        this.stompClient.connect({}, () => {
            this.stompClient.subscribe('/topic/public', this.onMessageReceived.bind(this));
            this.stompClient.send("/app/chat.addUser", {},
                JSON.stringify({ sender: this.username, type: 'JOIN' }));
        });
    }
    sendMessage(message) {
        this.stompClient.send("/app/chat.sendMessage", {},
            JSON.stringify({ sender: this.username, content: message, type: 'CHAT' })
        );
    }
    onMessageReceived(payload) {
        const message = JSON.parse(payload.body);
        switch (message.type) {
            case 'JOIN':
                handleJoin(message.sender);
                break;
            case 'LEAVE':
                handleLeave(message.sender);
                break;
            case 'CHAT':
                const avatar = new Avatar(message.sender);
                handleChat(avatar, message.sender, message.content);
                break;
            default:
                console.error('Unknown message type:', message.type);
        }
    }
}
export default Client;