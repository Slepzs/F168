import "../../src/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-satisfy",
  preload: true,
  subsets: ["latin"],
});

const configQuery = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

function App({ Component, pageProps }: AppProps) {
  const isDevEnv = process.env.NEXT_PUBLIC_ENV === "development";
  const [queryClient] = React.useState(() => new QueryClient(configQuery));
  return (
    <main className={`${satisfy.variable} `}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/*  {isDevEnv && <ReactQueryDevtools />} */}
      </QueryClientProvider>
    </main>
  );
}

export default App;
