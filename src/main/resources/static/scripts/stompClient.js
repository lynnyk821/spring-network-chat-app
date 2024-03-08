class Client {
    constructor(username) {
        this.username = username;
        this.stompClient = Stomp.over(new SockJS('ws'));
    }
    connect() {
        this.stompClient.connect({}, () => {
            this.stompClient.subscribe('/topic/public', this.onMessageReceived.bind(this));
            this.stompClient.send("/app/chat.addUser", {}, JSON.stringify({ sender: this.username, type: 'JOIN' }));
        });
    }
    sendMessage(message) {
        this.stompClient.send("/app/chat.sendMessage", {},
            JSON.stringify({ sender: this.username, content: message, type: 'CHAT' })
        );
    }
    onMessageReceived(payload) {
        const message = JSON.parse(payload.body);
        this.handleEvent(message);
    }
    handleEvent(message) {
        switch (message.type) {
            case 'JOIN':
                this.handleJoin(message.sender);
                break;
            case 'LEAVE':
                this.handleLeave(message.sender);
                break;
            case 'CHAT':
                this.handleChat(message.sender, message.content);
                break;
            default:
                console.error('Unknown message type:', message.type);
        }
    }

    handleJoin(username) {
        const messageArrayElement = document.getElementById('messageArray');
        const pElement = document.createElement('p');

        pElement.className = 'event-message';
        pElement.textContent = `${username} joined the chat.`;

        messageArrayElement.appendChild(pElement);
    }

    handleLeave(username) {
        const messageArrayElement = document.getElementById('messageArray');
        const pElement = document.createElement('p');

        pElement.className = 'event-message';
        pElement.textContent = `${username} left the chat.`;

        messageArrayElement.appendChild(pElement);
    }

    handleChat(sender, content) {
        const messageArrayElement = document.getElementById('messageArray');
        const pElement   = document.createElement('p');

        pElement.className = 'event-message';
        pElement.textContent = `${sender}: ${content}`;

        messageArrayElement.appendChild(pElement);
    }
}

export default Client;