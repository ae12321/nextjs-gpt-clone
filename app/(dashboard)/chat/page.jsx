"use client";

import Chat from "@/components/Chat";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function ChatPage() {
  const showToast = () => {
    setTimeout(() => {
      toast.success("ChatPage");
    }, 2000);
  };

  const queryClient = new QueryClient();
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Chat />
      </HydrationBoundary>
      <div className="" style={{ display: "none" }}>
        <h2>ChatPage</h2>
        <button className="btn btn-primary" onClick={showToast}>
          show
        </button>
      </div>
    </div>
  );
}
