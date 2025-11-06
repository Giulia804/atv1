// layout.tsx
import "./globals.css"; // importa as regras definidas em globals.css

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );

}
