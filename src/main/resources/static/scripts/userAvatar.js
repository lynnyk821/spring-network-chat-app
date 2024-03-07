class UserAvatar{
    colors = [
        '#2196F3', '#32c787', '#00BCD4', '#ff5652',
        '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
    ];
    constructor(username) {
        this.color = this.getAvatarColor(username);
    }
    getAvatarColor(username){
        let hash = 0;
        for (let i = 0; i < username.length; i++) {
            hash = 31 * hash + username.charCodeAt(i);
        }
        let index = Math.abs(hash % this.colors.length);
        return this.colors[index];
    }
}