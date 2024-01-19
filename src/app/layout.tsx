import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <head>
        <title>Camel Studio</title>
        <meta
          name="description"
          content="Studion de développement basé en Tunisie : Prêts à développer votre porojet avec Camel Studio"
        ></meta>
      </head>
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
