import "@/app/ui/global.css";
import { poppins } from "./ui/fonts";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NextTopLoader height={4} />
        {children}
      </body>
    </html>
  )
}