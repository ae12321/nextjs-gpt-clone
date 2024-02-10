import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT clone",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime facere natus id eaque excepturi adipisci, maiores doloribus ea libero minus in deleniti molestiae omnis deserunt fuga, necessitatibus ratione exercitationem?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
