"use client";

import { generateChatResponse } from "@/app/(dashboard)/chat/_action/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (nextMessage) =>
      generateChatResponse([...chatMessages, nextMessage]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("error...");
        return;
      }
      setChatMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ inputText, chatMessages });
    console.log({ inputText, chatMessages });
    const nextMessage = { role: "user", content: inputText };
    mutate(nextMessage);
    setChatMessages((prev) => [...prev, nextMessage]);
    setInputText("");
  };

  console.log(chatMessages);

  return (
    <>
      {/* layout.jsのpy-12 */}
      <div className="h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
        {/* messages area */}
        <div>
          {chatMessages.map((message, index) => {
            return (
              <div key={index} className="flex gap-4">
                <p>{JSON.stringify(message)}</p>
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
