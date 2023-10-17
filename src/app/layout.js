import "./globals.css";

export const metadata = {
	title: "光方测试平台",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
