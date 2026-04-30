const chatBox = document.getElementById("chatBox");

// Welcome message
window.onload = () => {
  botMessage("Hi 👋 I’m your AI Book Assistant!<br>Ask me for books or recommendations.");
};

function botMessage(text) {
  const msg = document.createElement("div");
  msg.className = "bot";
  msg.innerHTML = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function userMessage(text) {
  const msg = document.createElement("div");
  msg.className = "user";
  msg.innerText = text;
  chatBox.appendChild(msg);
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (!text) return;

  userMessage(text);
  input.value = "";

  setTimeout(() => handleBotResponse(text), 800);
}

function quickReply(text) {
  userMessage(text);
  setTimeout(() => handleBotResponse(text), 500);
}

function handleBotResponse(text) {
  text = text.toLowerCase();

  if (text.includes("book")) {
    showBooks();
  } 
  else if (text.includes("recommend")) {
    botMessage("I recommend reading self-growth and finance books 📈");
    showBooks();
  } 
  else if (text.includes("help")) {
    botMessage("You can ask me:<br>• Show books<br>• Recommend books");
  } 
  else {
    botMessage("Sorry, I didn’t understand 🤔");
  }
}

function showBooks() {
  const books = [
    {
      name: "Harry Potter",
      author: "J.K. Rowling",
      img: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      img: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
    },
    {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      img: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    }
  ];

  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.img}">
      <h4>📚 ${book.name}</h4>
      <p>👤 ${book.author}</p>
    `;
    chatBox.appendChild(card);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}
