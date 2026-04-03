import "./globals.css";

export const metadata = {
  title: "YouTube Watch Page",
  description: "WEB101 PA1 - YouTube Watch Page Recreation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}