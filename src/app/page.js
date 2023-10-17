import Image from 'next/image';
import { InputTextNumber } from './client';
import { Box } from 'grommet';

export default function Home() {
	return (
		<Box className='home' flex={true} align='center'>
			<InputTextNumber></InputTextNumber>
		</Box>
	);
}
