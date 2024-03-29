const _chatListeners = [];
const socket = io();

function AddChatListener(listener) {
    _chatListeners.push(listener);
}

function SendChat(text) {
    socket.emit('chat', text)
}