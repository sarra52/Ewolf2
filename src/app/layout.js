import { Navbar } from "@/components";
import { Montserrat, Julius_Sans_One } from 'next/font/google';
import './globals.css'; // Ensure you have global styles

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Add only the required weights
  variable: '--font-montserrat', // Define a CSS variable
});

const juliusSansOne = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-julius', // Define a CSS variable
});

export const metadata = {
  title: "Electric Wolf",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <title>Electric Wolf</title>
        <link rel="icon" type="png" href="/logo/favicon.png"></link>
      </head>
      <body
        className={`${montserrat.variable} ${juliusSansOne.variable} antialiased font-montserrat w-full min-h-screen max-h-max overflow-hidden overflow-y-scroll`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
