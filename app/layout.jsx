import './globals.css';

export const metadata = {
  title: 'DigitalNomadsk — Intelligent digital systems',
  description: 'Agentic applications, AI systems and security engineering.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
