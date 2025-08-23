// Change this IP to your Pi's current IP
const ws = new WebSocket("ws://10.0.0.105:5000");

ws.onopen = () => console.log("Connected to server");

ws.onmessage = (event) => {
    const chat = document.getElementById("chat");
    chat.innerHTML += event.data + "<br>";
    chat.scrollTop = chat.scrollHeight;
};

function sendMsg() {
    const input = document.getElementById("msg");
    if (input.value) {
        ws.send(input.value);
        input.value = '';
    }
}
