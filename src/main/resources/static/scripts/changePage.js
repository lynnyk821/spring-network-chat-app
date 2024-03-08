/*changePage.js*/

const changePage = (username) => {
    const usernamePage = document.getElementById('usernamePage');
    const chatPage = document.getElementById('chatPage');

    if(username) {
        usernamePage.classList.add('hidden');
        chatPage.classList.remove('hidden')
    }
}

export { changePage }