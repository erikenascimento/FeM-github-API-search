import React from "react";

import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
	title: "Devfinder",
	description: "Created by: Erike Nascimento",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
