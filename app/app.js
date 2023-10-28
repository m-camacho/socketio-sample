const socket = io("ws://localhost:8080");

socket.on("message", (messageStr) => {
  const message = JSON.parse(messageStr);
  if (message) {
    const el = document.createElement("li");
    el.innerHTML = `${message.author}: ${message.text}`;
    document.querySelector("ul").appendChild(el);
  }
});

document.querySelector("button").onclick = () => {
  const author = document.getElementById("name").value;
  const text = document.getElementById("message").value;
  socket.emit("message", JSON.stringify({ author, text }));
};
