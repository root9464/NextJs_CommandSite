/* eslint-disable key-spacing */

/* eslint-disable react/react-in-jsx-scope */

import {type Metadata} from 'next';
import styles from '@/app/global.module.scss';

import {MemberBlock} from '@/components/pages/MemberPage/MemberBlock';
export const metadata: Metadata = {
	title: 'About | Next app',
};

export default function Member() {
	return (
		<section className={styles.main}>
			<div className={styles.block5}>
				<MemberBlock props={{name:'Egor', text:'fffffff'}}/>
			</div>
		</section>
	);
}
