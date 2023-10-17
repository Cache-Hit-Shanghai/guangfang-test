'use client';

import { Box, Button, Text, Meter, Grid } from 'grommet';

const row = 6;

const ProjectDetail = () => {
	const testList = Array.from({ length: row * 2 }).map(() => ({
		name: '测试项名称',
		state: '',
		stateShow: '',
	}));
	testList[0].state = 'wait';
	testList[1].state = 'testing';
	testList[2].state = 'pass';
	testList[3].state = 'ng';
	testList[0].stateShow = '未开始';
	testList[1].stateShow = '测试中';
	testList[2].stateShow = 'PASS';
	testList[3].stateShow = 'NG';

	const areas = testList
		.map(({ name }, i) => {
			const left = i < row;
			return [
				{
					name: `name-${i}`,
					start: [left ? 0 : 2, i % row],
					end: [left ? 0 : 2, i % row],
				},
				{
					name: `state-${i}`,
					start: [left ? 1 : 3, i % row],
					end: [left ? 1 : 3, i % row],
				},
			];
		})
		.flat(2);

	//console.log('testList', testList);
	// console.log(areas);

	return (
		<Box className='project-content'>
			<Box direction='row' align='center' height={'63px'}>
				<button className='project-button-toggle'>切换测试</button>
				<Box direction='row' justify='center' width={'100%'}>
					<span className='project-title'>项目信息: </span>
					<span className='project-title'>L1, L1, 富士康，贴片测试</span>
				</Box>
			</Box>
			<Box direction='row' align='center' justify='between'>
				<Box gap='12px'>
					<span className='project-test-sn'>被测设备SN</span>
					<input placeholder='请输入被测设备SN' className='project-test-input'></input>
				</Box>
				<Box height={'176px'} style={{ position: 'relative' }}>
					<Meter background={'#bbb'} color='rgba(22, 132, 252, 1)' value={35} type='circle'></Meter>
					<span className='project-test-meter-process'>%35</span>
				</Box>
				<button className='project-test-start'>开始测试</button>
			</Box>

			<Grid
				areas={areas}
				columns={['auto', 'auto', 'auto', 'auto']}
				justify='center'
				align='center'
				border={[{ side: 'top' }, { side: 'left' }]}
				rows={Array.from({ length: row }).fill('80px')}
			>
				{testList.map(({ name, state, stateShow }, i) => {
					return [
						{ k: 'name', v: name },
						{ k: 'state', v: stateShow, s: state },
					].map(({ k, v, s }, j) => (
						<Box
							key={[i, j].join('-')}
							justify='center'
							align='center'
							fill={true}
							border={[{ side: 'right' }, { side: 'bottom' }]}
							gridArea={`${k}-${i}`}
							className={k === 'state' ? `project-state-text project-state-text-${s}` : ''}
						>
							{v}
						</Box>
					));
				})}
			</Grid>
		</Box>
	);
};

export { ProjectDetail };
