import React from 'react';
import Search from './Search/Search';
import Filters from './Filters/Filters';
import styles from './Search/Search.module.scss';
import logo from '../images/Logo.svg';

const TopBar = () => {
	return (
		<div className={styles.Wrapper}>
			<img src={logo} alt='logo' className={styles.Logo} />
			<Filters />
			<Search />
		</div>
	);
};

export default TopBar;
