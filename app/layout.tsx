import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "./components/Navbar";
import Hydration from "./components/Hydration";
// import { ClerkProvider } from "@clerk/nextjs";

const poppins = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Explore AI Internship",
  description: "Career Recommendation System Group 7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Hydration>
            <Navbar />
            {children}
          </Hydration>
        </body>
      </html>
    // {/* // </ClerkProvider> */}
  );
}
