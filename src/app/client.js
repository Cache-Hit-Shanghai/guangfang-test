'use client';
import { Box, Text, TextInput, Button } from 'grommet';
import Link from 'next/link';

const InputTextNumber = () => {
	return (
		<Box
			width={'994px'}
			height={'auto'}
			margin={{ top: '154px' }}
			style={{
				border: '1px solid rgba(187, 187, 187, 1)',
			}}
		>
			<Box height={'56px'} background={'#e8e8e8'} justify='center'>
				<Text color='#101010' size='28px'>
					输入测试串号
				</Text>
			</Box>
			<Box pad='medium' align='center'>
				<TextInput placeholder='请输入测试串号'></TextInput>
				<Link legacyBehavior={true} href={'/project'}>
					<Button
						label='确定'
						style={{
							width: '240px',
							height: '68px',
							lineHeight: '52px',
							borderRadius: '4px',
							backgroundColor: 'rgba(164, 173, 179, 1)',
							color: 'rgba(255, 255, 255, 1)',
							fontSize: '36px',
							textAlign: 'center',
							marginTop: '66px',
							border: '1px solid rgba(255, 255, 255, 1)',
						}}
					></Button>
				</Link>
			</Box>
		</Box>
	);
};

const PageHead = () => {
	return (
		<Box height={'56px'} background={'#e8e8e8'} justify='center' pad={{ horizontal: 'medium' }}>
			<Text color='#101010' size='28px'>
				光方测试平台 - version x.y.z
			</Text>
		</Box>
	);
};

export { InputTextNumber, PageHead };
