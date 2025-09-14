import Header from "@/components/header";
import "./globals.css";
import { Poppins, Montserrat_Alternates } from "next/font/google";
import { RootLayoutProps } from "./types";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat_alternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export const metadata = {
  title: 'Print Forge', // Default title
  description: "Print Forge is site for exploring amazing 3D models",
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat_alternates.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
