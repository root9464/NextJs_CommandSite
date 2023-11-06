
/* eslint-disable react/react-in-jsx-scope */

import styles from '@/app/global.module.scss';
import {Relevance} from '@/components/pages/HomeAuthors/Relevance';
import {BlockInvite} from '@/components/pages/HomeAuthors/BlockInvite';
import blures from '@/assets/img/blures2.png';
import Image from 'next/image';
const BlockPage = () => (
	<div className={styles.block4}>
		<Image src={blures} alt='blur'className={styles.blures3}/>
		<div className={styles.h}><h1>кто нам нужен</h1></div>
		<div className={styles.pos}>
			<div className={styles.pos2}>
				<Relevance/>
			</div>
			<BlockInvite/>
		</div>
	</div>
);

export {BlockPage};

