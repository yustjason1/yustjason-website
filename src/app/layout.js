import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: "yustjason-website",
  description: "Displays my projects and about me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jason Yust's personal website showcasing projects and about me."
        />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
