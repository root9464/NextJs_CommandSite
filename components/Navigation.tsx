
'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Image from 'next/image';
import styles from '@/app/global.module.scss';
import {NavLink} from '@/types/propses';
type Props = {
	navLinks: NavLink[];
};

const Navigation = ({navLinks}: Props): JSX.Element => {
	const pathname = usePathname();
	return (
		<>
			{navLinks.map(link => {
				const isActive = pathname === link.href;

				return (
					<div key={link.id} className={styles.block}>
						<Image className={styles.ico} src={link.icon} alt='icon'/>
						<Link
							href={link.href}
							className={isActive ? 'active' : ''}>
							{link.label}
						</Link>
					</div>
				);
			})}
		</>
	);
};

export {Navigation};
