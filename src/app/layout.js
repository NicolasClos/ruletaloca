import "./globals.css";

export const metadata = {
  title: 'RuletaLoca - Centro Cultural Armoza',
  description: 'Organiza torneos de ajedrez de manera fácil y rápida. Sigue los resultados de tus torneos. ¡Empieza hoy y lleva tus torneos al siguiente nivel!',
  keywords: 'Gira gira gira y la suerte es loca...',
  robots: 'index, follow',
  author: 'Nicolás Clos',
  icons: {
    icon: '/logo.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
