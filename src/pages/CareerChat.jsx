import { useState, useEffect, useRef } from "react";
import "../styles/CareerChat.css";
import aiResponses from "../data/aiResponses";

function CareerChat() {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hi 👋 I'm your AI Career Coach. Ask me anything!",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    const question = input.toLowerCase();

    setTimeout(() => {
      let reply =
        "Great question! 🤖 We'll connect this chat to a real AI model soon.";

      for (const key in aiResponses) {
        if (question.includes(key)) {
          reply = aiResponses[key];
          break;
        }
      }

      const aiMessage = {
        sender: "AI",
        text: reply,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setTyping(false);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chat-page">
      <h1>🤖 AI Career Chat</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "AI" ? "ai-msg" : "user-msg"}
          >
            <strong>{msg.sender}</strong>

            <p style={{ whiteSpace: "pre-line" }}>
              {msg.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="ai-msg">
            <strong>AI</strong>
            <p>Typing...</p>
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask AI anything..."
          value={input}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default CareerChat;
