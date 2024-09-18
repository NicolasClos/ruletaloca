import "./globals.css";

export const metadata = {
  title: 'ArmozaChess - Torneos de Ajedrez',
  description: 'Organiza torneos de ajedrez de manera fácil y rápida. Sigue los resultados de tus torneos. ¡Empieza hoy y lleva tus torneos al siguiente nivel!',
  keywords: 'Organización de torneos de ajedrez, Software de gestión de torneos, Sistema suizo para ajedrez, Sistema Americano para Ajedrez, Sistema Round Robin para Ajedrez, Plataforma de ajedrez en línea, Resultados de partidas de ajedrez, Calendario de torneos de ajedrez, Registro de jugadores de ajedrez, Ranking de ajedrez en línea, Torneos de ajedrez para clubes, Software para torneos suizos, Plataforma para resultados de ajedrez, Aplicaciones de ajedrez en línea, Gestión de partidas de ajedrez, Programas para torneos de ajedrez, Simuladores de torneos de ajedrez, Herramientas de gestión de ajedrez, Organización de eventos de ajedrez, Torneos de ajedrez por equipos, Sistema de emparejamiento de ajedrez, Resultados de torneos de ajedrez en vivo, Administración de competiciones de ajedrez, Web para torneos de ajedrez, Aplicación de resultados de ajedrez, Gestión de resultados de torneos, Torneos de ajedrez en línea, Sistemas de puntuación de ajedrez, Emparejamiento de torneos de ajedrez, Análisis de resultados de ajedrez, Automatización de torneos de ajedrez, Servicios de torneos de ajedrez en línea',
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
