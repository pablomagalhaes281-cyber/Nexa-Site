import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Nexa Flow IA | Automação e IA para empresas',
  description: 'Sites, automação, bots e soluções com inteligência artificial para empresas que querem crescer com tecnologia.',
  icons: {
    icon: '/logo-nexa.png',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#030306] text-white">{children}</body>
    </html>
  );
}
