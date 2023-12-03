
import Link from 'next/link';
import styles from '@/app/global.module.scss';
import {AuthorProps} from '@/types/propses';

export const Author = async (props: AuthorProps) => {
	const url = `/authorshome/member${props.id}`;
	return (
		<div className={styles.bcauthor}>
			<div className={styles.author}></div>
			<div className={styles.titleauthor}>
				<Link href={url}>{props.stack}</Link>
			</div>
		</div>
	);
};

