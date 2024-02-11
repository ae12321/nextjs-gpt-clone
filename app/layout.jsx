import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT clone",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime facere natus id eaque excepturi adipisci, maiores doloribus ea libero minus in deleniti molestiae omnis deserunt fuga, necessitatibus ratione exercitationem?",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html data-theme="light" lang="ja">
        <body className={inter.className}>
          <Providers>
            {/*  */}
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
