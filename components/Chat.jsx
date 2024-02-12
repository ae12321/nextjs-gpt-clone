"use client";

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiRobot2Line, RiUser2Line } from "react-icons/ri";

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const { mutate, isPending } = useMutation({
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
    // console.log({ inputText, chatMessages });
    const nextMessage = { role: "user", content: inputText };
    mutate(nextMessage);
    setChatMessages((prev) => [...prev, nextMessage]);
    setInputText("");
  };

  // console.log(chatMessages);

  return (
    <>
      {/* layout.jsのpy-12 */}
      <div className="max-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
        {/* messages area */}
        <div>
          {chatMessages.map(({ role, content }, index) => {
            const state =
              role === "user"
                ? {
                    place: "chat-end",
                    icon: <RiUser2Line className="w-8 h-8" />,
                  }
                : {
                    place: "chat-start",
                    icon: <RiRobot2Line className="w-8 h-8" />,
                  };
            // console.log(state);
            return (
              <div key={index} className={`chat ${state.place}`}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">{state.icon}</div>
                </div>
                <div className="chat-bubble">{content}</div>
              </div>
            );
          })}
          {isPending && (
            <div>
              <span className="loading"></span>
              <span>回答中...</span>
            </div>
          )}
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
            <button
              type="submit"
              className="btn btn-primary join-item"
              disabled={isPending}
            >
              {isPending ? "処理中..." : "question"}
            </button>
          </div>
        </form>
        {/*  */}
        {/*  */}
      </div>
    </>
  );
}
