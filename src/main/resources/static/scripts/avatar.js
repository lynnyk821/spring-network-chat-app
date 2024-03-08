import { getHash } from "./helpers.js";

class Avatar {
    colors = [ '#2196F3', '#32c787', '#00BCD4', '#ff5652', '#ffc107', '#ff85af', '#FF9800', '#39bbb0'];
    constructor(username) {
        this.username = username;
    }
    getAvatarColor(){
        let hash = getHash(this.username);
        let index = Math.abs(hash % this.colors.length);
        return this.colors[index];
    }
    getAvatarElement(){
        const avatarElement = document.createElement('i');

        avatarElement.classList.add('chat-message__avatar');
        avatarElement.textContent = this.username[0];
        avatarElement.style['background'] = this.getAvatarColor();

        return avatarElement;
    }
}

export default Avatar;