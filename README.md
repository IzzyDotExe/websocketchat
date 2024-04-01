# Websocket Chat

Websocket chat is an anonymous chat service written in Javascript with sockets which serves a web frontend. 

## Technologies used
- The chat service is written in javascript using the socket io library. It serves a frontend and a socket JS library using an expressjs server. 
- The client is written in HTML/CSS/JS and can dynamically switch between different styles. Styles are written in css and javascript and by default there is an IRC and Imessage style. 

## How it works
Websocket chat is a very simple service, it does not encrypt, modify, or store any communications. Everything that is recieved from the clients are immediately broadcasted to any connected client. 

## Roadmap (Ideas)

- Singing and encryption of messages using asymetric keys
- Private messages with stored history
- Pseudonyms