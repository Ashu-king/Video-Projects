import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theamProvider";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/providers/SessionProvider";
import "./globals.css";
import { Toaster, toast } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "ashu created is this app",
  icons: {
    icon: [
      {
        media: "(prefers-colors-schems:light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-colors-schems:dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme-2"
        >
          <SessionProvider session={session}>
            <Toaster />
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
