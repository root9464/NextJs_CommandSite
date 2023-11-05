/* eslint-disable react/react-in-jsx-scope */

import styles from '@/app/global.module.scss';
import Image from 'next/image';
import Background from '@/assets/img/backgrounds/HomeAuthors.jpg';

export default function HomeAuthors() {
	return (
		<div className={styles.main}>
			<Image className={styles.bcimage} src={Background} alt='f'/>
			<div className={styles.block4}>
				<div className={styles.h}>кто нам нужен</div>
				<div className={styles.pos}>
					<div className={styles.requirements}>zzz</div>
					<div className={styles.requirements}>zzz</div>
				</div>
			</div>
		</div>
	);
}
