import React from 'react';
import TopBar from './TopBar';
import Content from './Content/Content';
import { motion } from 'framer-motion';

const Main = () => {
	return (
		<motion.div className='Main' animate={{ opacity: [0, 1] }} exit={{ opacity: [1, 0] }}>
			<TopBar />
			<Content />
		</motion.div>
	);
};

export default Main;
