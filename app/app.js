const socket = io("ws://localhost:8080");

socket.on("message", (messageStr) => {
  const message = JSON.parse(messageStr);
  if (message) {
    const el = document.createElement("li");
    el.innerHTML = message.text;
    document.querySelector("ul").appendChild(el);
  }
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", JSON.stringify({ text }));
};
