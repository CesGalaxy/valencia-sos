import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "València SOS",
    description: "València SOS",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}>
        <header className="bg-slate-100 flex flex-col gap-y-2 md:flex-row items-center justify-between md:px-4 py-2">
            <nav className="text-lg">
                <span>València</span>
                <b className="text-red-500">SOS</b>
            </nav>
            <nav className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 *:bg-slate-300 *:px-4 *:py-1 *:rounded-full *:hover:underline">
                <Link href={"/"}>Inici</Link>
                <Link href={"/info"}>Informació</Link>
                <Link href={"/social"}>Xarxes socials</Link>
                <Link href={"/parlar"}>⚠️ Escriu un missatge d&#39;ajuda</Link>
            </nav>
        </header>
        {children}
        </body>
        </html>
    );
}
