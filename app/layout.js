import './globals.css';
import 'leaflet/dist/leaflet.css';

export const metadata = {
  title: 'Athena Bao | Software Engineer',
  description: 'UW Computer Science senior graduating December 2026. Selected software, cloud, and data visualization projects.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
