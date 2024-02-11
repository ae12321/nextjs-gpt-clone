"use client";

import Chat from "@/components/Chat";
import toast from "react-hot-toast";

export default function ChatPage() {
  const showToast = () => {
    setTimeout(() => {
      toast.success("ChatPage");
    }, 2000);
  };
  return (
    <div>
      <Chat />
      <div className="" style={{ display: "none" }}>
        <h2>ChatPage</h2>
        <button className="btn btn-primary" onClick={showToast}>
          show
        </button>
      </div>
    </div>
  );
}
