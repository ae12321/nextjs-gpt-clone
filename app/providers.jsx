"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useCallback, useMemo, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 30 * 1000,
          retry: false,
        },
      },
    });
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
