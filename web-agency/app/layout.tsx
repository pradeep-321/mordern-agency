import "./globals.css";

export const metadata = {
  title: "Creative Digital Agency",
  description: "Professional Web Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}



