const _chatListeners = [];
let socket;

function initSocket() {
    socket = io();

    socket.connect()

    socket.on('connect', () => {
        console.log('Connected as: ' + socket.id)
        socket.on('chat', (data) => {
            const json = JSON.parse(data)
            for (let func of _chatListeners)
                func(json);
        })
    })

}

function AddChatListener(listener) {
    _chatListeners.push(listener);
}

function SendChat(text) {
    socket.emit('chat', text)
}