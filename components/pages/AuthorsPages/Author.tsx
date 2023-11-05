/* eslint-disable @typescript-eslint/semi */

/* eslint-disable react/react-in-jsx-scope */

import Link from 'next/link';
import styles from '@/app/global.module.scss';

const Author = ({props}: any) => {
	const url = `/authorshome/member${props.id}`
	return (
		<div className={styles.bcauthor}>
			<div className={styles.author}></div>
			<div className={styles.titleauthor}>
				<Link href={url}>{props.stack}</Link>
			</div>
		</div>
	);
};

export {Author};