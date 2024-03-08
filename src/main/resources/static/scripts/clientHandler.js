const messageArrayElement = document.getElementById('messageArray');

function appendElementToMessageArray(element) {
    messageArrayElement.appendChild(element);
}
function createSplitter(element) {
    element.appendChild(document.createElement('div')).classList.add('splitter');
}
function createPElement(className, textContent) {
    const pElement = document.createElement('p');
    pElement.className = className;
    pElement.textContent = textContent;
    return pElement;
}
function handleJoin(username) {
    const pElement = createPElement('event-message', `${username} joined the chat.`);
    appendElementToMessageArray(pElement);
    createSplitter(messageArrayElement);
}
function handleLeave(username) {
    const pElement = createPElement('event-message', `${username} left the chat.`);
    appendElementToMessageArray(pElement);
    createSplitter(messageArrayElement);
}

function handleChat(avatar, sender, content) {
    const chatMessageContainerElement = document.createElement('div');
    chatMessageContainerElement.classList.add('chat-message-info');

    const avatarElement = avatar.getAvatarElement();
    chatMessageContainerElement.appendChild(avatarElement);

    const userInfoContainer = document.createElement('div');
    userInfoContainer.classList.add('chat-message__user-info');

    const usernameElement = document.createElement('span');
    usernameElement.classList.add('chat-message__username');
    usernameElement.textContent = sender;
    userInfoContainer.appendChild(usernameElement);

    const contentElement = document.createElement('p');
    contentElement.classList.add('chat-message__content');
    contentElement.textContent = content;
    userInfoContainer.appendChild(contentElement);

    chatMessageContainerElement.appendChild(userInfoContainer);

    appendElementToMessageArray(chatMessageContainerElement);
}

export { handleChat, handleJoin, handleLeave };