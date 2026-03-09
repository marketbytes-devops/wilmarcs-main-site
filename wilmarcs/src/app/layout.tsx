import './globals.css';
import { Header, Footer } from '@/components';
import { getCategory } from '@/lib/data';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // adjust as needed
  variable: '--font-poppins', // custom CSS variable
  display: 'swap',
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footmenu = await getCategory(1, 0);
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        {children}
        <Footer data={footmenu?.data ?? []} />
      </body>
    </html>
  );
}
