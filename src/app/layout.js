import './globals.css';
import { Grommet, grommet, Box } from 'grommet';
import { PageHead } from './client';

const metadata = {
	title: '光方测试平台',
	description: '',
};

export { metadata };

export default function RootLayout({ children }) {
	return (
		<html lang='zh'>
			<body>
				<Grommet full theme={grommet} themeMode={'light'}>
					<PageHead></PageHead>
					<Box flex={true}>{children}</Box>
				</Grommet>
			</body>
		</html>
	);
}
