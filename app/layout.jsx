import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT clone",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime facere natus id eaque excepturi adipisci, maiores doloribus ea libero minus in deleniti molestiae omnis deserunt fuga, necessitatibus ratione exercitationem?",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
