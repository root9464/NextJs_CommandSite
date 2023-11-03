/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/react-in-jsx-scope */

import styles from '@/app/global.module.scss';
import {Video} from '@/components/Video';
import Image from 'next/image';
import blures from '@/assets/img/blures1.svg';
import {BlockL} from '@/components/pages/AboutPages/BlocksLeft';
import {BlockR} from '@/components/pages/AboutPages/BlocksRight';

const AboutPage = () => {
	const props = 'https://cdn.coverr.co/videos/coverr-water-droplets-on-a-branch-7524/1080p.mp4';

	return (
		<div className={styles.main}>
			<Video url={props}/>
			<Image src={blures} alt='b' className={styles.blures}/>
			<div className={styles.block1}>

				<BlockL/>
				<BlockR/>
			</div>
		</div>
	);
};

export {AboutPage};
