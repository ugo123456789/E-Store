import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "E-Store",
	description: "E-store to display products",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
					<ModalProvider />
					<ToastProvider />
					{/* @ts-expect-error Server Component */}
					<Navbar />
					{children}
					<Footer />
			</body>
		</html>
	);
}
