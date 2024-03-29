
function nameTags(latest) {
    const messages = document.querySelector("#messages");
    for (let message of messages.children) {
        if (message.classList.contains('sender-me')) {
            message.children[0].innerText = "You: " + message.innerText;
        } else {
            message.children[0].innerText = "Anonymous: " + message.innerText;
        }
    }

}

window.addEventListener('load', () => {
    if (!_chatListeners.includes(nameTags)) {
        AddChatListener(nameTags)
    }
})