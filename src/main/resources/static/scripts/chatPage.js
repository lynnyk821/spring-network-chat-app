import {addClassAttribute, getElementById, removeClassAttribute} from "./helpers.js";

const changePage = (username) => {
    const usernamePage = getElementById('usernamePage');
    const chatPage = getElementById('chatPage');

    if(username) {
        addClassAttribute(usernamePage, 'hidden');
        removeClassAttribute(chatPage, 'hidden');
    }
}

const addMessage = (messageArrayElement, messageText) => {
    const messageRow = document.createElement('p');
    addClassAttribute(messageRow, 'user-x-message');

    const text = document.createTextNode(messageText);
    messageRow.appendChild(text);

    messageArrayElement.appendChild(messageRow);
}

export { changePage, addMessage }