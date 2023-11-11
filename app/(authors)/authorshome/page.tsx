/* eslint-disable react/react-in-jsx-scope */

import styles from '@/app/global.module.scss';
import Image from 'next/image';
import {BlockPage} from '@/components/pages/HomeAuthors/BlockPage';
import Background from '@/assets/img/backgrounds/HomeAuthors.png';
export default function HomeAuthors() {
	return (
		<section className={styles.main}>
			<Image className={styles.bcimage} src={Background } alt='f'/>
			<BlockPage/>
		</section>
	);
}
