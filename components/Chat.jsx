"use client";

import React, { useState } from "react";

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { text: "hello", user: "user1" },
    { text: "hello!", user: "robot" },
    { text: "how are you ", user: "user1" },
    { text: "im fine!", user: "robot" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log({ inputText, messages });
  };

  return (
    <>
      {/* layout.jsのpy-12 */}
      <div className="h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
        {/* messages area */}
        <div>
          {messages.map((message, index) => {
            return (
              <div key={index} className="flex gap-4">
                <p>{message.text}</p>
                <p>{message.user}</p>
              </div>
            );
          })}
        </div>

        {/* question area */}
        <form onSubmit={handleSubmit}>
          <div className="w-full join">
            <input
              type="text"
              placeholder="enter..."
              className="input input-info w-full join-item"
              value={inputText}
              required
              name="text"
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary join-item">
              question
            </button>
          </div>
        </form>
        {/*  */}
        {/*  */}
      </div>
    </>
  );
}
