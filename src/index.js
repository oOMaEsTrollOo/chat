import React, {
  useState,
  useEffect,
  // useLayoutEffect,
  // useCallback,
  // useMemo,
  // useRef,
} from "react";

import ReactDOM from "react-dom";

import "./index.css";

const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "Bot",
      message: "message 1",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const sendMessages = () => {
    setMessages([...messages, { author: "User", message: value }]);
    setValue("");
  };

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author === "User") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "hello from bot" },
        ]);
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  return (
    <div>
      <h2>
        <input
          placeholder="Введите сообщение"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessages}>send message</button>
        <hr />
        {messages.map((message) => (
          <div>
            <h2>{message.author}</h2>
            <p>{message.message}</p>
            <hr />
          </div>
        ))}
      </h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <MessageList />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
