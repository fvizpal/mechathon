import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/themeProvider";
import { ModalProvider } from "@/components/providers/modalProvider";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
// import { SocketContext } from "@/components/providers/socketProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BaatCheet",
  description: "Pour your heart out",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <SocketContext> */}
            <ModalProvider />
            {children}
            {/* </SocketContext> */}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
