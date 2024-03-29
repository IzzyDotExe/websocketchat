const messages = []
const clients = () => messages.map(x => x.source).unique();
const currentClient = () => clients().indexOf(socket.id)

function SaveMessage(json) {
    messages.push(json);
}

function CreateMessage(content) {
    const p = document.createElement('p')
    p.innerText = content.data;
    p.id = `chat-${messages.indexOf(content)}`
    p.classList.add('message')

    if (content.source === socket.id) {
        p.classList.add('sender-me')
    } else {
        const client = clients().indexOf(content.source)
        p.classList.add(`sender-${client}`)
    }


    return p;
}

function UpdateMessages(latest) {

    const msgRep = document.querySelector("#messages");
    const inp = document.querySelector('input#message')
    msgRep.clearChildren();

    for (let msg of messages)
        msgRep.appendChild(CreateMessage(msg))

    window.location = `#chat-${messages.indexOf(latest)}`;
    inp.focus();


}

