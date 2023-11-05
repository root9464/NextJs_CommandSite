/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/react-in-jsx-scope */

import Link from 'next/link';
import Image from 'next/image';
import {Navigation, type NavLink} from '@/components/Navigation';
import styles from '@/app/global.module.scss';
import Home from '@/assets/img/Home.svg';
import Blog from '@/assets/img/Blog.svg';
import Portfolio from '@/assets/img/Portfolio.svg';
import Authors from '@/assets/img/Authors.svg';
import About from '@/assets/img/About.svg';
import Logo from '@/assets/img/Logo.svg';
const Header = () => {
	const NavItem: NavLink[] = [
		{icon: Home, label: 'Home', href: '/', id: 1},
		{icon: Portfolio, label: 'Portfolio', href: '/portfolio', id: 2},
		{icon: Authors, label: 'Authors', href: '/authors', id: 3},
		{icon: Blog, label: 'Blog', href: '/blog', id: 4},
		{icon: About, label: 'About', href: '/about', id: 5},
	];
	return (
		<header className={styles.header}>
			<Image src={Logo} alt='logo' className={styles.logo} />
			<Navigation navLinks={NavItem}/>
		</header>
	);
};

export {Header};
