import localFont from "next/font/local";
import "./globals.css";

const neue = localFont({
  src: "./fonts/PPNeueMontreal-Medium.woff2",
  variable: "--font-neue",
});

export const metadata = {
  title: "Lam Tan Tai | Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${neue.variable} font-neue antialiased`}>
        {children}
      </body>
    </html>
  );
}
