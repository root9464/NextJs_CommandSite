
import {AuthorPage} from '@/components/pages/AuthorsPages/AuthorPage';
import styles from '@/app/global.module.scss';

import {type Metadata} from 'next';
export const metadata: Metadata = {
	title: 'About | Next app',
};

export default function Authors() {
	return (
		<section className={styles.main}>
			<AuthorPage/>
		</section>
	);
}
