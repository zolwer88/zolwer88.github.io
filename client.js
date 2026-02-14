// Replace SERVER_IP with your ZeroTier IP
let ws = new WebSocket("ws://SERVER_IP:8765");

ws.onopen = () => {
    console.log("Connected to server!");
};
