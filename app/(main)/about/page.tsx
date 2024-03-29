
import {type Metadata} from 'next';
import {AboutPage} from '@/components/pages/AboutPages/AboutPage';
import styles from '@/app/global.module.scss';

export const metadata: Metadata = {
	title: 'About | Next app',
};

export default async function About() {
	return (
		<section className={styles.main}>
			<AboutPage/>
		</section>
	);
}
