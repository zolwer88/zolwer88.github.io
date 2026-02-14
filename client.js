// Replace SERVER_IP with your ZeroTier IP
let ws = new WebSocket("ws://10.130.85.163:8765");

ws.onopen = () => {
    console.log("Connected to server!");
};
