import "./globals.css";

export const metadata = {
  title: 'RuletaLoca - Centro Cultural Armoza',
  description: 'Gira gira gira y la suerte es loca...',
  keywords: 'Ruleta, ruleta loca, ruleta armoza, armoza wines, armoza ruleta, ruleta loca armoza, preguntados ruleta, ruleta preguntados armoza',
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
