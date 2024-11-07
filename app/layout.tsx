import './globals.css';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata = {
  title: 'Hotel Reservation Management',
  description: 'Hotel staff management platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/reservations">Reservations</Link>
              </li>
              <li>
                <Link href="/guests">Guests</Link>
              </li>
              <li>
                <Link href="/rooms">Rooms</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </body>
  </html>
  );
}



