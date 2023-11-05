/* eslint-disable react/react-in-jsx-scope */
import {Header} from '@/components/Header';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>

		</>

	);
}
