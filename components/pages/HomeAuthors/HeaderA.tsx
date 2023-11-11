
import Image from 'next/image';
import {Navigation, type NavLink} from '@/components/Navigation';
import styles from '@/app/global.module.scss';
import Home from '@/assets/img/Home.svg';
import Member from '@/assets/img/Member.svg';
import Logo from '@/assets/img/Logo.svg';
import Next from '@/assets/img/Next.svg';
const HeaderA = () => {
	const NavItem: NavLink[] = [
		{icon: Home, label: 'Home', href: '/', id: 1},
		{icon: Next, label: 'Next', href: '/authorshome/', id: 2},
		{icon: Member, label: 'Member2', href: '/authorshome/member1', id: 3},
		{icon: Member, label: 'Member3', href: '/authorshome/member2', id: 4},
		{icon: Member, label: 'Member3', href: '/authorshome/member3', id: 5},
	];
	return (
		<header className={styles.header}>
			<Image src={Logo} alt='logo' className={styles.logo} />
			<Navigation navLinks={NavItem}/>
		</header>
	);
};

export {HeaderA};
