import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll";
import Header from "./components/header";

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
        <SmoothScroll>
          <main className="px-layout-padding">
            <Header />

            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
