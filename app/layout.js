import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <p className="text-lg font-semibold">Welcome to Raunak Codex Clan 💗</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/RaunakRaj2081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/raunak-raj-16b7572b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
         
        </div>
      </div>
    </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
